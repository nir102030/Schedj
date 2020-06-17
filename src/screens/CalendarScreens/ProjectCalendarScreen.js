import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ColorMessageComp from '../../components/calendarComponents/ColorMessageComp';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { createEventsArray, findFreeTimeSlots } from '../../calendar/calendarAPI';
import Spacer from '../../components/genericComponents/Spacer';
import Spinner from '.././genericComponents/Spinner';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ProjectCalendarScreen = ({ navigation, users }) => {
	const project = navigation.getParam('project');
	const participants = project.participants;
	const [events, setEvents] = useState([]);
	const [freeTimeSlots, setFreeTimeSlots] = useState([]);
	const [markedDates, setMarkedDates] = useState([]);

	const initiateArraysAsync = async () => {
		const moment = extendMoment(Moment);
		let promise2 = new Promise((resolve, reject) => {
			resolve(createEventsArray(participants, users));
		});
		const result2 = await promise2;
		setEvents(result2);

		let promise3 = new Promise((resolve, reject) => {
			resolve(findFreeTimeSlots(result2, moment));
		});
		const result3 = await promise3;
		// const filtredTimeSlots = await result3.filter((timeSlot) => {
		// 	const newTimeSlot = timeSlot.toString().substring(16, 24);
		// 	const startHour = '10:00:00';
		// 	const endHour = '24:00:00';
		// 	return newTimeSlot > startHour && newTimeSlot < endHour;
		// });
		setFreeTimeSlots(result3);

		let promise4 = new Promise((resolve, reject) => {
			resolve(createMarkedDates(result3));
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

	const redenrCalendar = markedDates ? (
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
	) : (
		<Spinner />
	);

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row-reverse', marginLeft: 5, marginTop: 5, marginBottom: 5 }}>
				<ColorMessageComp
					style={styles.col}
					colorCode="#388e3c"
					colorTitle="Green"
					colorName="G"
					description="The whole is available for meetings"
				/>
				<Text> </Text>
				<ColorMessageComp
					style={styles.col}
					colorCode="#fcc400"
					colorTitle="Yellow"
					colorName="Y"
					description="Most of the day is available for meetings"
				/>
				<Text> </Text>
				<ColorMessageComp
					style={styles.col}
					colorCode="#d32f2f"
					colorTitle="Red"
					colorName="R"
					description="Couple hours left for meetings - hurry up!"
				/>
				{/* <ColorMessageComp colorCode="#808080" colorName="Grey" description="Grey - Busy" /> */}
			</View>
			<Spacer>{redenrCalendar()}</Spacer>
			{/* <Image source={require('../../../assets/images/animat-calendar-color1.gif')} style={styles.backgroundimage} /> */}
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
	col: {
		marginHorizontal: 10,
		marginVertical: 10,
		paddingVertical: 20,
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
	backgroundimage: {
		height: 100,
		width: 400,
		flex: 1,
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
