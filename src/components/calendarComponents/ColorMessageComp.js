import React from 'react';
import { Button } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const ColorMessageComp = ({ colorCode, colorName, description }) => {
	return (
		<Button
			onPress={() => {
				showMessage({
					message: colorName,
					description: description,
					type: 'info',
					color: 'white',
					backgroundColor: colorCode,
				});
			}}
			title={colorName}
			color={colorCode}
		/>
	);
};

export default ColorMessageComp;
