import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';

const MeetingStatus = ({ meeting, style }) => {
	const status = meeting.status;
	const header = status == 'Waiting' ? 'Waiting...' : 'Approved';
	const description = status == 'Waiting' ? 'Not all members approve the invitation' : 'All members approve the invitation';
	const color = status == 'Waiting' ? '#A37F11' : '#194d33';


	return (
		<View style={styles.top}>
			<View style={styles.container}>
				<View style={{ marginLeft: 5, marginRight: 5 }}>
					<TouchableOpacity
						onPress={() => {
							showMessage({
								message: `Status: ${status}`,
								description: description,
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
								color: color,
								fontWeight: 'bold',
								paddingBottom: 2,
							}}
						>
							{header}
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{ alignSelf: 'center' }}
					onPress={() => {
						showMessage({
							message: `Status: ${status}`,
							description: `${description}`,	//	${project.participants}`,
							type: 'info',
							color: 'black',
							backgroundColor: '#c2dbe6',
						});
					}}
				>
					{/* <Image style={styles.statusStyle} source={require('../../../assets/images/status.png')} /> */}
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

export default MeetingStatus;
