import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../genericComponents/Spacer';
import Spinner from '../genericComponents/Spinner';

const AuthForm = ({ type, onSubmit, loading }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const renderButton = () => {
		return loading ? <Spinner /> : <Button title={type} onPress={() => onSubmit(email, password)} />;
	};

	return (
		<>
			<Spacer>
				<Text h3>{type} for Schedj</Text>
			</Spacer>
			<Input
				label="Email"
				value={email}
				onChangeText={(email) => setEmail(email)}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				secureTextEntry
				label="Password"
				value={password}
				onChangeText={(password) => setPassword(password)}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer>{renderButton()}</Spacer>
		</>
	);
};

const styles = StyleSheet.create({});

export default AuthForm;
