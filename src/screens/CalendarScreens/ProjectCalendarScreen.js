import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ColorMessageComp from '../../components/calendarComponents/ColorMessageComp';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { createEventsArray, findFreeTimeSlots, createMarkedDates } from '../../calendar/calendarAPI';
import Spinner from '../../components/genericComponents/Spinner';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ProjectCalendarScreen = ({ navigation, users, meetings }) => {
	const project = navigation.getParam('project');
	const participants = project.participants;
	const [events, setEvents] = useState([]);
	const [freeTimeSlots, setFreeTimeSlots] = useState([]);
	const [markedDates, setMarkedDates] = useState([]);
	const [loading, setLoading] = useState(true);
	console.log(project.participantsStatus)

	const initiateArraysAsync = async () => {
		const moment = extendMoment(Moment);
		let promise2 = new Promise((resolve, reject) => {
			resolve(createEventsArray(project, participants, users, meetings));
		});
		const result2 = await promise2;
		setEvents(result2);

		let promise3 = new Promise((resolve, reject) => {
			resolve(findFreeTimeSlots(result2, moment));
		});
		const result3 = await promise3;
		setFreeTimeSlots(result3);

		let promise4 = new Promise((resolve, reject) => {
			resolve(createMarkedDates(result3));
		});
		const result4 = await promise4;
		setMarkedDates(result4);
		setLoading(false);
	};
	useEffect(() => {
		initiateArraysAsync();
	}, []);

	const redenrCalendar = () => {
		return loading ? (
			<Spinner />
		) : (
			<View>
				<View style={{ flexDirection: 'row-reverse', marginLeft: 5, marginTop: 5, marginBottom: 5 }}>
					<ColorMessageComp
						style={styles.col}
						colorCode="#388e3c"
						colorTitle="Green"
						colorName="G"
						description="The entire day is available for meetings"
					/>
					<Text> </Text>
					<ColorMessageComp
						style={styles.col}
						colorCode="#fcc400"
						colorTitle="Yellow"
						colorName="Y"
						description="Just a few hours left for meetings - hurry up!"
					/>
					<Text> </Text>
					<ColorMessageComp
						style={styles.col}
						colorCode="#d32f2f"
						colorTitle="Red"
						colorName="R"
						description="The whole day is busy, try a different day"
					/>
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

	return <View style={styles.container}>{redenrCalendar()}</View>;
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
		justifyContent: 'center',
		alignItems: 'center',
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
	return { calendars: state.calendars, users: state.users, meetings: state.meetings };
};

export default connect(mapStateToProps, actions)(ProjectCalendarScreen);
