import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Vibration } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Notifications } from 'expo';
import { createCalendar } from '../../calendar/calendarAPI';
import { getAllUsersFromDb } from '../../firebase/usersAPI';
import { getAllProjectsFromDb } from '../../firebase/projectsAPI';
import { getCalendarPermission } from '../../calendar/calendarAPI';

const OpenScreen = ({ navigation, addProject, editProject, addMeeting, addCalendar, addUser, projects, users }) => {
	const user = firebase.auth().currentUser;

	const initData = async () => {
		const usersPromise = new Promise((resolve, reject) => resolve(getAllUsersFromDb(addUser)));
		const projectsPromise = usersPromise.then(getAllProjectsFromDb(user, addProject, editProject));
		const calendarPromise = projectsPromise.then(getCalendarPermission(addCalendar, user));
		calendarPromise.then((val) => console.log(val));
	};

	// const editCalendarAsync = async () => {
	// 	let promise = new Promise((resolve, reject) => {
	// 		setTimeout(() => resolve(createCalendar(addCalendar, user)), 1000);
	// 	});
	// 	const result = await promise;
	// };

	useEffect(() => {
		initData();
		// editCalendarAsync();
		_notificationSubscription = Notifications.addListener(handleNotification);
	}, []);

	const handleNotification = (notification) => {
		Vibration.vibrate();
		const type = String(notification.data.type);
		const project = notification.data.project;
		switch (type) {
			case 'add_project':
				navigation.navigate('InviteP', { project });
				break;
			case 'add_meeting':
				const meeting = notification.data.meeting;
				navigation.navigate('InviteM', { meeting, project });
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
		backgroundColor: '#e8f1f9',
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
		marginRight: 30,
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

const mapStateToProps = (state) => {
	return { projects: state.projects, users: state.users };
};

export default connect(mapStateToProps, actions)(OpenScreen);
