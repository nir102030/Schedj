import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { registerForPushNotifications } from '../../firebase/notifications';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Notifications } from 'expo';
import { addProjectToDb } from '../../firebase/projectsAPI';

const OpenScreen = ({ navigation, users, addProject }) => {
	const user = firebase.auth().currentUser;

	useEffect(() => {
		registerForPushNotifications(user);
		_notificationSubscription = Notifications.addListener(handleNotification);
	}, []);

	const handleNotification = (notification) => {
		const project = notification.data.project;
		navigation.navigate('Projects');
		getAllProjectsFromDb(user, projects, addProject);
	};

	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/images/schedjWhiteTry.png')} style={styles.whiteHeadr} />
			<View style={styles.container}>
				<Image source={require('../../../assets/images/gif.png')} style={styles.backgroundimage} />
				<Image source={require('../../../assets/images/smallHeader.png')} style={styles.smallHeader} />
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
		backgroundColor: '#3b687d',
	},
	TouchableOpacity: {
		flexDirection: 'row-reverse',
		flex: 1,
		alignSelf: 'center',
		marginBottom: 80,
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
		marginBottom: 20,
	},
	whiteHeadr: {
		height: 120,
		width: 350,
		alignSelf: 'center',
		marginVertical: 35,
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
	return { users: state.users, projects: state.projects };
};

export default connect(mapStateToProps, actions)(OpenScreen);
