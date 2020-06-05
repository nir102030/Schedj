import React, { useState } from 'react';
import AuthForm from '../../components/AuthComponenets/AuthForm';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
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

		let promise2 = new Promise((resolve, reject) => {
			setTimeout(() => resolve(getCalendarPermission(addCalendar, user), 1000));
		});
		let result2 = await promise2;
		//console.log(result);
	};

	const onLoginSuccess = async () => {
		const user = firebase.auth().currentUser;
		addUser(user);
		handleSignUpAsync(user);
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
		<View>
			<AuthForm type="Sign Up" onSubmit={(email, password) => signUp(email, password)} loading={loading} />
			<Button title="Already signed up? Go to sign in" onPress={() => navigation.navigate('LogIn')} />
		</View>
	);
};

export default connect(null, actions)(SignupScreen);
