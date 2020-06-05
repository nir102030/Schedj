import * as Calendar from 'expo-calendar';
import { addCalendarToDb, editCalendarInDb } from '../firebase/calendarAPI';

export const getCalendarPermission = async (addCalendar, user, isNewUser) => {
	const { status } = await Calendar.requestCalendarPermissionsAsync();
	if (status === 'granted') {
		createCalendar(addCalendar, user, type);
	}
};

async function getDefaultCalendarSource() {
	const calendars = await Calendar.getCalendarsAsync();
	const defaultCalendars = calendars.filter((each) => each.source.name === 'Default');
	return defaultCalendars[0].source;
}

export const createCalendarObject = async (user) => {
	console.log('new calendar obj');
	const calendars = await Calendar.getCalendarsAsync();
	const calendarIds = calendars.map((calendar) => {
		return calendar.id;
	});
	const startDate = new Date('June 1, 2020 00:00:00');
	const endDate = new Date('June 31, 2021 00:00:00');
	let events = await Calendar.getEventsAsync(calendarIds, startDate, endDate);
	events = events.map((event) => {
		return {
			id: event.id,
			startDate: event.startDate,
			endDate: event.endDate,
			title: event.title,
		};
	});
	const cid = Math.floor(Math.random() * 99999);
	const calendar = { cid: cid, uid: user.uid, name: user.email, events: events };
	return calendar;
};

export const createCalendar = async (addCalendar, user, type) => {
	const calendar = await createCalendarObject(user);
	if (type === 'sign_up') {
		console.log('createCalendar signup');
		addCalendar(calendar);
		addCalendarToDb(calendar);
	} else if (type === 'logged_in') {
		console.log('createCalendar logged in');
		addCalendar(calendar);
		editCalendarInDb(calendar);
	}
};
