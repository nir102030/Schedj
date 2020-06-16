import * as Calendar from 'expo-calendar';
import { addCalendarToDb, editCalendarInDb } from '../firebase/calendarAPI';

export const getCalendarPermission = async (addCalendar, user) => {
	const { status } = await Calendar.requestCalendarPermissionsAsync();
	if (status === 'granted') {
		createCalendar(addCalendar, user);
	}
};

export const createCalendar = async (addCalendar, user) => {
	const calendar = await createCalendarObject(user);
	addCalendar(calendar);
	addCalendarToDb(calendar);
};

export const createCalendarObject = async (user) => {
	const calendars = await Calendar.getCalendarsAsync();
	const calendarIds = calendars.map((calendar) => {
		return calendar.id;
	});
	const startDate = new Date('June 1, 2020 00:00:00');
	const endDate = new Date('June 30, 2020 23:00:00');
	const events = await createEvents(calendarIds, startDate, endDate);
	const calendar = { uid: user.uid, name: user.email, events: events };
	return calendar;
};

const createEvents = async (calendarIds, startDate, endDate) => {
	let events = await Calendar.getEventsAsync(calendarIds, startDate, endDate);

	events = events.map((event) => {
		return {
			id: event.id,
			start: event.startDate,
			end: event.endDate,
			title: event.title.toString(),
		};
	});
	return events;
};
