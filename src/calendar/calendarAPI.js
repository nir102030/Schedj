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
		const start = new Date(event.startDate);
		const end = new Date(event.endDate);
		start.setTime(start.getTime() + 3 * 60 * 60 * 1000);
		end.setTime(end.getTime() + 3 * 60 * 60 * 1000);
		return {
			id: event.id,
			start: start.toJSON(),
			end: end.toJSON(),
			title: event.title.toString(),
		};
	});
	return events;
};
