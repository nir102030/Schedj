import React, { useState } from 'react';
import AuthForm from '../../components/AuthComponenets/AuthForm';
import { View, StyleSheet,Image } from 'react-native';
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

	return(
		<View style={styles.background}>
		<AuthForm type="Sign In" onSubmit={(email, password) => signIn(email, password)} loading={loading} />
		<Image source={require('../../../assets/images/yaelle.png')} style={styles.smallHeader} />
		</View>
	)
};
	
	
export default LoginScreen;

const styles = StyleSheet.create({
	background:{
		backgroundColor:'#e8f1f9',
		height:'100%'
	},
	smallHeader:{
		width:350,
		height:300,
		alignSelf:'center',
		marginVertical:60,	
	}

});

