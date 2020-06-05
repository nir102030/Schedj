import React from 'react';
import EventCalendar from 'react-native-events-calendar';
import { Dimensions } from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

const DailyCalendar = ({ navigation, calendars }) => {
	const initialDate = navigation.getParam('date').dateString;
	let { width } = Dimensions.get('window');
	const user = firebase.auth().currentUser;
	const userCalendar = calendars.find((calendar) => calendar.uid == user.uid);
	const calendarEvents = userCalendar.events;
	const getDateFormat = (dateString) => {
		const date = dateString.substring(0, dateString.indexOf('T'));
		const hour = dateString.substring(dateString.indexOf('T') + 1, dateString.indexOf('.'));
		return `${date} ${hour}`;
	};
	const events = calendarEvents.map((event) => {
		const startDate = getDateFormat(event.startDate);
		const endDate = getDateFormat(event.endDate);
		return { start: startDate, end: endDate, title: event.title, summary: '' };
	});
	const filterEvents = (events) => {
		return events.filter((event) => {
			return event.start.substring(0, 10) === initialDate;
		});
	};

	const formatDate = (date) => {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	};
	const filteredEvents = filterEvents(events);
	const newEvents = filteredEvents.map((event) => {
		let newStart = new Date(event.start.substring(0, 10));
		newStart.setDate(newStart.getDate() + 1);
		let newEnd = new Date(event.end.substring(0, 10));
		newEnd.setDate(newEnd.getDate() + 1);
		const start = `${formatDate(newStart)} ${event.start.substring(11, 19)}`;
		const end = `${formatDate(newEnd)} ${event.end.substring(11, 19)}`;
		return {
			start: start,
			end: end,
			title: event.title,
			summary: '',
		};
	});
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

export default connect(mapStateToProps, actions)(withNavigation(DailyCalendar));
// [
// 	{
// 		end: '2020-06-01 17:30:00',
// 		start: '2020-06-01 16:30:00',
// 		summary: '',
// 		title: 'קבוצת ריצה',
// 	},
// 	{
// 		end: '2020-06-01 15:00:00',
// 		start: '2020-06-01 06:00:00',
// 		summary: '',
// 		title: 'עבודה',
// 	},
// 	{
// 		end: '2020-06-01 06:50:00',
// 		start: '2020-06-01 06:40:00',
// 		summary: '',
// 		title: 'Nir Katz - Toptal Initial Interview with Caesar',
// 	},
// 	{
// 		end: '2020-06-01 07:40:00',
// 		start: '2020-06-01 06:40:00',
// 		summary: '',
// 		title: 'Call with Caesar Buslon from Toptal',
// 	},
// ];

//    [
//     Object {
//       "end": "2020-06-02 17:30:00",
//       "start": "2020-06-02 16:30:00",
//       "summary": "",
//       "title": "קבוצת ריצה",
//     },
//      {
//       "end": "2020-06-02 15:00:00",
//       "start": "2020-06-02 06:00:00",
//       "summary": "",
//       "title": "עבודה",
//     },
//      {
//       "end": "2020-06-02 06:50:00",
//       "start": "2020-06-02 06:40:00",
//       "summary": "",
//       "title": "Nir Katz - Toptal Initial Interview with Caesar",
//     },
//      {
//       "end": "2020-06-02 07:40:00",
//       "start": "2020-06-02 06:40:00",
//       "summary": "",
//       "title": "Call with Caesar Buslon from Toptal",
//     },
//   ]
