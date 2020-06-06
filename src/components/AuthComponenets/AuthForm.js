import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input} from 'react-native-elements';
import Spacer from '../genericComponents/Spacer';
import Spinner from '../genericComponents/Spinner';

const AuthForm = ({ type, onSubmit, loading }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const renderButton = () => {
		return loading ? <Spinner /> : <Button title={type} onPress={() => onSubmit(email, password)}containerStyle={{width: 380,alignSelf:'center'}} />;
	};

	return (
		<>
				<Text h3 style={styles.signUp}> {type} for Schedj</Text>
				<Text style={styles.email}></Text>
				<Input 
					label="Email"
					value={email}
					onChangeText={(email) => setEmail(email)}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Text style={styles.password}></Text>
				<Input 
					secureTextEntry
					label="Password"
					value={password}
					onChangeText={(password) => setPassword(password)}
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Text style={styles.password}></Text>
				<Spacer>{renderButton()}</Spacer>
				{/* <Image source={require('../../../assets/images/yaelle.png')} style={styles.smallHeader} /> */}
		</>
	);
};

const styles = StyleSheet.create({
	background:{
		backgroundColor:'#e8f1f9',
		height:'100%'
	},
	signUp:{
		paddingTop:30
	},
	email:{
		paddingTop:20
	},
	password:{
		paddingTop:10
	},
	smallHeader:{
		width:350,
		height:300,
		alignSelf:'center',
		marginVertical:27,
		
	}
});

export default AuthForm;
