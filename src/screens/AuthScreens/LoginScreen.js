import React, { useState } from 'react';
import AuthForm from '../../components/AuthComponenets/AuthForm';
import firebase from 'firebase';

const LoginScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(false);

	const onLoginSuccess = () => {
		setLoading(false);
		alert('Signed in successfully');
		navigation.navigate('OpenS');
	};

	const onLoginFail = () => {
		setLoading(false);
		alert('Sign in failed!');
	};

	const signIn = (email, password) => {
		setLoading(true);
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				onLoginSuccess();
			})
			.catch(() => {
				onLoginFail();
			});
	};

	return <AuthForm type="Sign In" onSubmit={(email, password) => signIn(email, password)} loading={loading} />;
};

export default LoginScreen;
