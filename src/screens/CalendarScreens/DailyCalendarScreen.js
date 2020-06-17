import React, { useState } from 'react';
import EventCalendar from 'react-native-events-calendar';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

const DailyCalendar = ({ navigation, calendars }) => {
	const initialDate = navigation.getParam('date').dateString;
	const project = navigation.getParam('project');
	const freeTimeSlots = navigation.getParam('freeTimeSlots').map((freeTimeSlot) => {
		const to = new Date(freeTimeSlot);
		to.setTime(to.getTime() - 2 * 60 * 60 * 1000);
		return {
			from: freeTimeSlot.toJSON().substring(11, 16),
			to: to.toString().substring(16, 21),
		};
	});
	const getDateFormat = (dateString) => {
		const date = dateString.substring(0, dateString.indexOf('T'));
		const hour = dateString.substring(dateString.indexOf('T') + 1, dateString.indexOf('.'));
		return `${date} ${hour}`;
	};
	const dailyEvents = navigation.getParam('events').map((event) => {
		return { start: getDateFormat(event.start), end: getDateFormat(event.end), title: 'Busy', summary: '' };
	});
	const [events, setEvents] = useState(dailyEvents);

	let { width } = Dimensions.get('window');
	const filteredEvents = events.filter((event) => event.start.substring(0, 10) === initialDate);
	return (
		<>
			<EventCalendar
				eventTapped={() => {}}
				events={filteredEvents}
				width={width}
				initDate={initialDate}
				scrollToFirst={true}
				size={1}
			/>
			<TouchableOpacity
				style={styles.touch}
				onPress={() => navigation.navigate('CreateM', { project, date: initialDate })}
			>
				<Image source={require('../../../assets/images/add.png')} style={styles.home} />
			</TouchableOpacity>
		</>
	);
};

const mapStateToProps = (state) => {
	return { calendars: state.calendars };
};

export default connect(mapStateToProps, actions)(withNavigation(DailyCalendar));

const styles = StyleSheet.create({
	home: {
		height: 50,
		width: 50,

		// marginRight:10
	},
	touch: {
		// alignSelf:'flex-start',
		marginHorizontal: 65,
		position: 'absolute',
		marginTop: '150%',
		// alignItems:'flex-end'
	},
	TouchableOpacityA: {
		backgroundColor: '#bbdde1',
		flex: 2.5,
		flexDirection: 'column',
		borderBottomWidth: 0.6,
		borderBottomColor: 'white',
	},
	image: {
		height: 37,
		width: 37,
		alignSelf: 'center',
	},
});
