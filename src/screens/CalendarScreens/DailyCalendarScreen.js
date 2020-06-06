import React, { useState } from 'react';
import EventCalendar from 'react-native-events-calendar';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

const DailyCalendar = ({ navigation, calendars }) => {
	const initialDate = navigation.getParam('date').dateString;
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
	//console.log(filteredEvents);
	console.log(events);
	return (
		<EventCalendar
			//eventTapped={this._eventTapped.bind(this)}
			events={filteredEvents}
			width={width}
			initDate={initialDate}
			scrollToFirst={true}
			size={1}
		/>
	);
};

const mapStateToProps = (state) => {
	return { calendars: state.calendars };
};

const styles = StyleSheet.create({
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

export default connect(mapStateToProps, actions)(withNavigation(DailyCalendar));
