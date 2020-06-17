import React from 'react';
import { Button,StyleSheet, TouchableOpacity, Text } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const ColorMessageComp = ({ colorCode, colorName,colorTitle, description }) => {
	return (
		<TouchableOpacity 
			onPress={() => {
			showMessage({
				message: colorTitle,
				description: description,
				type: 'info',
				color: 'white',
				backgroundColor: colorCode,
				});
			}}
			style={{borderRadius:100,paddingHorizontal:12,paddingVertical:6.5,borderColor:colorCode,borderWidth:2}}>
			<Text>{colorName}</Text>
		</TouchableOpacity>
	);
};

export default ColorMessageComp;

