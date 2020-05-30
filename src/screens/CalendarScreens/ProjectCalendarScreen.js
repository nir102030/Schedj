import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
//import ApiCalendar from 'react-google-calendar-api';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { withNavigation } from 'react-navigation';
import { showMessage, hideMessage } from 'react-native-flash-message';
import * as Animatable from 'react-native-animatable';
import AppCalendar from './AppCalendar';
import { sendPushNotification } from '../../firebase/notifications';

const ProjectCalendarScreen = ({ navigation }) => {
	const project = navigation.getParam('project');

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={{ flexDirection: 'row-reverse' }}>
					<Button
						onPress={() => {
							showMessage({
								message: 'Green',
								description: 'Green - Available',
								type: 'info',
								color: 'white',
								backgroundColor: '#388e3c',
							});
						}}
						title="Green"
						color="#388e3c"
					/>
					<Button
						onPress={() => {
							showMessage({
								message: 'Yellow',
								description: 'Yellow - Waiting',
								type: 'info',
								color: 'white',
								backgroundColor: '#fcc400',
							});
						}}
						title="Yellow"
						color="#fcc400"
					/>
					<Button
						onPress={() => {
							showMessage({
								message: 'Red',
								description: 'Red - Scheduled',
								type: 'info',
								color: 'white',
								backgroundColor: '#d32f2f',
							});
						}}
						title="Red"
						color="#d32f2f"
					/>
					<Button
						onPress={() => {
							showMessage({
								message: 'Grey',
								description: 'Grey - Busy',
								type: 'info',
								color: 'white',
								backgroundColor: '#808080',
							});
						}}
						title="Grey"
						color="#808080"
					/>
				</View>
				<Calendar />
				<TouchableOpacity
					style={styles.TouchableOpacity}
					onPress={() => navigation.navigate('InviteP', { project })}
				>
					<Animatable.Text animation="slideInLeft" iterationCount={3} direction="alternate">
						<Text style={styles.test}> New Project Invitation</Text>
					</Animatable.Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('InviteM')}>
					<Animatable.Text animation="slideInRight" iterationCount={3} direction="alternate">
						<Text style={styles.test}> New Meeting Invitation</Text>
					</Animatable.Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

ProjectCalendarScreen.navigationOptions = () => {
	return {
		headerRight: (
			<View>
				<Text style={styles.headerStyle}> Calendar </Text>
			</View>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8f1f9',
		height: '100%',
	},
	image: {
		height: 50,
		width: 50,
		marginRight: 15,
		alignSelf: 'center',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 34,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
	test: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 34,
		alignSelf: 'center',
		color: 'white',
		textAlign: 'left',
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#8aa9b9',
		justifyContent: 'flex-end',
		borderBottomWidth: 5,
		borderBottomColor: '#2d6886',
	},
	TouchableOpacity: {
		backgroundColor: '#a1cfd5',
		flex: 1,
		flexDirection: 'row-reverse',
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginRight: 5,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
});

export default ProjectCalendarScreen;
