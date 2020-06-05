import React, { useState } from 'react';
import AuthForm from '../../components/AuthComponenets/AuthForm';
import { View, StyleSheet,Image } from 'react-native';
import { Button, colors } from 'react-native-elements';
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
		<View style={styles.background}>
			<AuthForm type="Sign Up" onSubmit={(email, password) => signUp(email, password)} loading={loading} />
			<Button title="Already signed up? Go to sign in" onPress={() => navigation.navigate('LogIn')}  
			containerStyle={{width: 380,alignSelf:'center'}}/>
			<Image source={require('../../../assets/images/yaelle.png')} style={styles.smallHeader} />
		</View>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({
	background:{
		backgroundColor:'#e8f1f9',
		height:'100%'
	},
	smallHeader:{
		width:350,
		height:300,
		alignSelf:'center',
		marginVertical:27,
		
	}

});