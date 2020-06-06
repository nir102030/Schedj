import * as Calendar from 'expo-calendar';
import { addCalendarToDb, editCalendarInDb } from '../firebase/calendarAPI';

export const getCalendarPermission = async (addCalendar, user) => {
	const { status } = await Calendar.requestCalendarPermissionsAsync();
	if (status === 'granted') {
		createCalendar(addCalendar, user);
	}
};

async function getDefaultCalendarSource() {
	const calendars = await Calendar.getCalendarsAsync();
	const defaultCalendars = calendars.filter((each) => each.source.name === 'Default');
	return defaultCalendars[0].source;
}

export const createCalendarObject = async (user) => {
	const calendars = await Calendar.getCalendarsAsync();
	const calendarIds = calendars.map((calendar) => {
		return calendar.id;
	});
	const startDate = new Date('June 7, 2020 00:00:00');
	const endDate = new Date('June 7, 2020 23:00:00');
	let events = await Calendar.getEventsAsync(calendarIds, startDate, endDate);
	events = events.map((event) => {
		return {
			id: event.id,
			startDate: event.startDate,
			endDate: event.endDate,
			title: event.title,
		};
	});
	const calendar = { uid: user.uid, name: user.email, events: events };
	return calendar;
};

export const createCalendar = async (addCalendar, user) => {
	const calendar = await createCalendarObject(user);
	addCalendar(calendar);
	addCalendarToDb(calendar);
};
