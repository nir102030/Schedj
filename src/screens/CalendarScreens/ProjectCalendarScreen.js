import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ColorMessageComp from '../../components/calendarComponents/ColorMessageComp';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ProjectCalendarScreen = ({ navigation, users }) => {
	const project = navigation.getParam('project');
	const participants = project.participants;
	const [events, setEvents] = useState([]);
	const [freeTimeSlots, setFreeTimeSlots] = useState([]);
	const [markedDates, setMarkedDates] = useState([]);
	const moment = extendMoment(Moment);

	const createTimeSlots = () => {
		let timeSlots = [];
		const timeInterval = '2020-06-01T08:00:00+00:00/2020-06-30T20:00:00+00:00';
		const range = moment.range(timeInterval);
		const hours = Array.from(range.by('hour', { excludeEnd: true }));
		timeSlots = hours.map((m) => m);
		return timeSlots;
	};

	const createEventsArray = () => {
		const projectUsers = participants.map((participant) => {
			return users.find((user) => participant === user.email);
		});
		let newEvents = [];
		projectUsers.map((user) => {
			const userEvents = user.calendar.events;
			return userEvents.map((event) => {
				newEvents = [...newEvents, event];
			});
		});
		return newEvents;
	};

	const timeCondition = (timeSlot) => {
		return !events.find((event) => moment.range(event.start, event.end).contains(timeSlot)); //the condition is that the
	};

	const findFreeTimeSlots = (timeSlots) => {
		const freeTimeSlotsArr = timeSlots.filter((timeSlot) => timeCondition(timeSlot)); //filter to find only the time slots that answer to the condition
		const freeTimeSlotObj = freeTimeSlotsArr.map((timeSlot) => {
			return timeSlot; //.format('YYYY-MM-DD');
		});
		return freeTimeSlotObj; //.filter((item, index) => freeTimeSlotObj.indexOf(item) === index);
	};

	const initiateArraysAsync = async () => {
		let promise1 = new Promise((resolve, reject) => {
			resolve(createTimeSlots());
		});
		const result1 = await promise1;

		let promise2 = new Promise((resolve, reject) => {
			resolve(createEventsArray());
		});
		const result2 = await promise2;
		setEvents(result2);

		let promise3 = new Promise((resolve, reject) => {
			resolve(findFreeTimeSlots(result1));
		});
		const result3 = await promise3;
		const filtredTimeSlots = await result3.filter((timeSlot) => {
			const newTimeSlot = timeSlot.toString().substring(16, 24);
			const startHour = '10:00:00';
			const endHour = '24:00:00';
			return newTimeSlot > startHour && newTimeSlot < endHour;
		});
		setFreeTimeSlots(filtredTimeSlots);

		let promise4 = new Promise((resolve, reject) => {
			resolve(createMarkedDates(filtredTimeSlots));
		});
		const result4 = await promise4;
		setMarkedDates(result4);
	};
	useEffect(() => {
		initiateArraysAsync();
	}, []);

	const createMarkedDates = (freeTimeSlots) => {
		let day = '01';
		let count = 1;
		let currentTimeSlot;
		let markedDates = freeTimeSlots.map((timeSlot) => {
			let timeSlotDay = timeSlot.toString().substring(8, 10);
			if (day != timeSlotDay) {
				day = timeSlotDay;
				currentTimeSlot = currentTimeSlot.toJSON().substring(0, 10);
				const timeSlotObj = { timeSlot: currentTimeSlot, count: count };
				count = 1;
				return timeSlotObj;
			}
			count = count + 1;
			currentTimeSlot = timeSlot;
			return null;
		});
		markedDates = markedDates.filter((dateObj) => dateObj != null);
		markedDates = markedDates.map((markDate) => {
			let color = '';
			if (markDate.count <= 2) {
				color = 'red';
			} else if (markDate.count > 2 && markDate.count <= 4) {
				color = '#ffc107';
			} else {
				color = '#81c784';
			}
			var date = markDate.timeSlot;
			var markDatesObj = {};
			markDatesObj[date] = { customStyles: { container: { borderWidth: 1, borderColor: color } } };
			return markDatesObj;
		});

		return Object.assign({}, ...markedDates);
	};

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row-reverse' }}>
				<ColorMessageComp colorCode="#388e3c" colorName="Green" description="Green - Available" />
				<ColorMessageComp colorCode="#fcc400" colorName="Yellow" description="Yellow - Waiting" />
				<ColorMessageComp colorCode="#d32f2f" colorName="Red" description="Red - Scheduled" />
				<ColorMessageComp colorCode="#808080" colorName="Grey" description="Grey - Busy" />
			</View>
			<Calendar
				onDayPress={(date) => {
					navigation.navigate('DailyCalendar', {
						date,
						events,
						project,
						freeTimeSlots: freeTimeSlots.filter(
							(timeSlot) => timeSlot.toJSON().substring(0, 10) == date.dateString
						),
					});
				}}
				markedDates={markedDates}
				markingType={'custom'}
			/>
		</View>
	);
};

ProjectCalendarScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<View style={styles.navigator}>
				<Text style={styles.headerStyle1}> Calendar </Text>
				<TouchableOpacity onPress={() => navigation.navigate('Projects')}>
					<Image source={require('../../../assets/images/home.png')} style={styles.home} />
				</TouchableOpacity>
			</View>
		),
	};
};

const styles = StyleSheet.create({
	calendarMark: {},
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
	navigator: {
		flexDirection: 'row',
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
	home: {
		height: 35,
		width: 35,
		marginRight: 10,
	},
	headerStyle1: {
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
