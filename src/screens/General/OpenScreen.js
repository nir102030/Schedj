import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Vibration } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { registerForPushNotifications } from '../../firebase/notifications';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Notifications } from 'expo';
import { getProjectFromDb } from '../../firebase/projectsAPI';
import { getMeetingFromDb } from '../../firebase/meetingsAPI';
import { getCalendarPermission, createCalendar } from '../../calendar/calendarAPI';

const OpenScreen = ({ navigation, addProject, addMeeting, addCalendar }) => {
	const user = firebase.auth().currentUser;

	useEffect(() => {
		registerForPushNotifications(user);
		getCalendarPermission();
		createCalendar(addCalendar, user);
		_notificationSubscription = Notifications.addListener(handleNotification);
	}, []);

	const handleNotification = (notification) => {
		Vibration.vibrate();
		const type = String(notification.data.type);
		switch (type) {
			case 'add_project':
				const project = notification.data.project;
				if (user.uid != project.uid) {
					getProjectFromDb(project.id, addProject);
				}
				navigation.navigate('InviteP', { project });
				break;
			case 'add_meeting':
				const meeting = notification.data.meeting;
				if (user.uid != meeting.creator) {
					getMeetingFromDb(meeting, addMeeting);
				}
				navigation.navigate('InviteM', { meeting });
				break;
			default:
				console.log('no data');
		}
	};

	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/images/schedjTorqTry.png')} style={styles.whiteHeadr} />
			<View style={styles.container}>
				<Image source={require('../../../assets/images/gif.png')} style={styles.backgroundimage} />
				<Image source={require('../../../assets/images/smallHeaderTorq.png')} style={styles.smallHeader} />
				<TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Projects')}>
					<Animatable.Text
						animation="pulse"
						easing="ease-out"
						iterationCount="infinite"
						style={{ textAlign: 'center' }}
					>
						<Image source={require('../../../assets/images/goSchedjTry.png')} style={styles.image} />
					</Animatable.Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

OpenScreen.navigationOptions = () => {
	return {
		headerRight: (
			<View>
				<Text style={styles.headerStyle}> Schedj </Text>
			</View>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
        backgroundColor:'#e8f1f9',
	},
	TouchableOpacity: {
		flexDirection: 'row-reverse',
		flex: 1,
		alignSelf: 'center',
		marginBottom: 100,
	},
	backgroundimage: {
		height: 700,
		width: 420,
		flex: 1,
		alignSelf: 'center',
	},
	smallHeader: {
		height: 150,
		width: 430,
		alignSelf: 'center',
	},
	image: {
		height: 120,
		width: 200,
		marginBottom: 10,
	},
	whiteHeadr: {
		height: 120,
		width: 350,
		alignSelf: 'center',
		marginVertical: 40,
		marginRight:30
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginRight: 5,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
});

export default connect(null, actions)(OpenScreen);
