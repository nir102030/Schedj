import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import DialogInput from '../../../node_modules/react-native-dialog-input';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { getProjectFromDbEdit } from '../../firebase/projectsAPI';

const ProjectStatus = ({ project, style }) => {
	const status = project.status;

	return (
		<View style={styles.top}>
			<View style={styles.container}>
				<View style={{ marginLeft: 5, marginRight: 5 }}>
					<TouchableOpacity
						onPress={() => {
							showMessage({
								message: `Status: ${status}`,
								description: status,
								type: 'info',
								color: 'black',
								backgroundColor: '#c2dbe6',
							});
						}}
					>
						<Text
							style={{
								fontSize: 14,
								marginVertical: 8,
								alignSelf: 'center',
								paddingLeft: 5,
								color: '#a37f11',
								fontWeight: 'bold',
								paddingBottom: 2,
							}}
						>
							{status}
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{ alignSelf: 'center' }}
					onPress={() => {
						showMessage({
							message: `Status: ${status}`,
							description: status,
							type: 'info',
							color: 'black',
							backgroundColor: '#c2dbe6',
						});
					}}
				>
					<Image style={styles.statusStyle} source={require('../../../assets/images/status.png')} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	top: {
		paddingTop: 44,
	},
	container: {
		flexDirection: 'row-reverse',
		backgroundColor: '#bedadc',
		borderRadius: 10,
		//paddingRight:30,
		alignSelf: 'center',
		paddingRight: 3,
	},
	statusStyle: {
		width: 24,
		height: 24,
	},
});

export default ProjectStatus;
