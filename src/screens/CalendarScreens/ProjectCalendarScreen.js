import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ColorMessageComp from '../../components/calendarComponents/ColorMessageComp';
import firebase from 'firebase';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ProjectCalendarScreen = ({ navigation, users }) => {
	const project = navigation.getParam('project');
	const participants = project.participants;
	const projectUsers = participants.map((participant) => {
		return users.find((user) => participant === user.email);
	});

	const getDateFormat = (dateString) => {
		const date = dateString.substring(0, dateString.indexOf('T'));
		const hour = dateString.substring(dateString.indexOf('T') + 1, dateString.indexOf('.'));
		return `${date} ${hour}`;
	};

	let eventsArr = [];
	const events = projectUsers.map((user) => {
		eventsArr = [...eventsArr, ...user.calendar.events];
	});
	console.log(eventsArr);
	// return user.calendar.events.map((event) => {
	// 	const startDate = getDateFormat(event.startDate);
	// 	const endDate = getDateFormat(event.endDate);
	// 	return { start: startDate, end: endDate, title: event.title, summary: '' };
	// });

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row-reverse' }}>
				<ColorMessageComp colorCode="#388e3c" colorName="Green" description="Green - Available" />
				<ColorMessageComp colorCode="#fcc400" colorName="Yellow" description="Yellow - Waiting" />
				<ColorMessageComp colorCode="#d32f2f" colorName="Red" description="Red - Scheduled" />
				<ColorMessageComp colorCode="#808080" colorName="Grey" description="Grey - Busy" />
			</View>
			<Calendar onDayPress={(date) => navigation.navigate('DailyCalendar', { date: date, events: eventsArr })} />
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

const mapStateToProps = (state) => {
	return { calendars: state.calendars, users: state.users };
};

export default connect(mapStateToProps, actions)(ProjectCalendarScreen);
