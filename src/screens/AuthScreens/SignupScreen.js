import React, { useState } from 'react';
import AuthForm from '../../components/AuthComponenets/AuthForm';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';

const SignupScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(false);

	const onLoginSuccess = () => {
		setLoading(false);
		alert('Signed up successfully');
		navigation.navigate('LogIn');
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

export default SignupScreen;
