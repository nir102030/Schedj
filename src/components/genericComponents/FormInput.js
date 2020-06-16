import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const FormInput = ({ title, value, onChange, viewStyle, long }) => {
	return (
		<View style={viewStyle}>
			<Input
				inputContainerStyle={styles.input}
				placeholder={title}
				placeholderTextColor={'#3b696e'}
				value={value}
				onChangeText={onChange}
				maxLength={long}
				inputStyle={{ marginHorizontal: 3 }}
			/>
			{/* <Text style={styles.text}>{title} </Text> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		marginRight: 10,
		marginTop: 8,
		marginBottom: 10,
		color: 'black',
	},
	input: {
		marginTop: 7,
		marginBottom: 7,
		marginRight: 5,
		marginLeft: 10,
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: '#c3dadd',
		borderRadius: 5,
		flex: 1,
	},
});

export default FormInput;
