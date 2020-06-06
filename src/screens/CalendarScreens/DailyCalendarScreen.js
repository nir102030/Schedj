import React from 'react';
import EventCalendar from 'react-native-events-calendar';
import { Dimensions } from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

const DailyCalendar = ({ navigation, calendars }) => {
	const initialDate = navigation.getParam('date').dateString;
	const events = navigation.getParam('events').map((event) => {
		return { start: event.start, end: event.end, title: event.title, summary: '' };
	});
	console.log(events);
	let { width } = Dimensions.get('window');
	//const filteredEvents = events.filter((event) => event.start.substring(0, 10) === initialDate);
	//console.log(filteredEvents);

	return (
		<EventCalendar
			//eventTapped={this._eventTapped.bind(this)}
			events={events}
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

export default connect(mapStateToProps, actions)(withNavigation(DailyCalendar));
