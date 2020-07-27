import React, { useState } from 'react';
import AuthForm from '../../components/AuthComponenets/AuthForm';
import { View, StyleSheet, Image } from 'react-native';
import { Button, colors } from 'react-native-elements';
import firebase from 'firebase';
import { getCalendarPermission } from '../../calendar/calendarAPI';
import { registerForPushNotifications } from '../../firebase/notifications';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const SignupScreen = ({ navigation, addUser, addCalendar }) => {
	const [loading, setLoading] = useState(false);
	//we need to get the real user from the db
	const handleSignUpAsync = async (user) => {
		let promise1 = new Promise((resolve, reject) => {
			setTimeout(() => resolve(registerForPushNotifications(user), 1000));
		});
		let result1 = await promise1;
		getCalendarPermission(addCalendar, user);
	};

	const onLoginSuccess = async () => {
		const currentUser = firebase.auth().currentUser;
		const newUser = {
			uid: currentUser.uid,
			email: currentUser.email,
			profileName: currentUser.email,
			profilePic: { uri: '' },
			reminder: '',
			rank: '',
			calendar: { name: currentUser.email, uid: currentUser.uid, events: [] },
			emailNotification: false,
			mobileNotification: true,
		};
		// addUser(newUser);
		handleSignUpAsync(newUser);
		setLoading(false);
		alert('Signed up successfully');
	};

	const onLoginFail = () => {
		setLoading(false);
		alert('Sign up failed!');
	};

	const signUp = (email, password) => {
		setLoading(true);
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				onLoginSuccess();
			})
			.catch(() => {
				onLoginFail();
			});
	};

	return (
		<View style={styles.background}>
			<AuthForm type="Sign Up" onSubmit={(email, password) => signUp(email, password)} loading={loading} />
			<Button
				title="Already signed up? Go to sign in"
				onPress={() => navigation.navigate('LogIn')}
				containerStyle={{ width: 380, alignSelf: 'center' }}
			/>
			<Image source={require('../../../assets/images/yaelle.png')} style={styles.smallHeader} />
		</View>
	);
};

export default connect(null, actions)(SignupScreen);

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#e8f1f9',
		height: '100%',
	},
	smallHeader: {
		width: 350,
		height: 300,
		alignSelf: 'center',
		marginVertical: 27,
	},
});
