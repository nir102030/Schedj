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
			type: 'calendar',
		};
	});
	return events;
};

const createTimeSlots = async (moment) => {
	let timeSlots = [];
	const timeInterval = '2020-06-01T08:00:00+00:00/2020-07-01T20:00:00+00:00';
	const range = moment.range(timeInterval);
	const hours = Array.from(range.by('hour', { excludeEnd: true }));
	timeSlots = hours.map((m) => m);
	return timeSlots;
};

export const createEventsArray = async (project, participants, users, meetings) => {
	const meetingsEvents = meetings
		.filter((meeting) => meeting.pid == project.id)
		.map((meeting) => {
			return {
				id: meeting.mid,
				start: `${meeting.from.substring(0, 19)}.000Z`,
				end: `${meeting.to.substring(0, 19)}.000Z`,
				title: `${meeting.mid + 1}`,
				type: 'meeting',
			};
		});

	const projectUsers = participants.map((participant) => {
		return users.find((user) => participant === user.email);
	});
	let newEvents = [];
	projectUsers.map((user) => {
		const userEvents = user.calendar.events;
		return userEvents.map((event) => {
			newEvents = [...newEvents, event];
		});
	});

	let eventsArray = [...newEvents, ...meetingsEvents];
	eventsArray = eventsArray.sort((firstEvent, secondEvent) => {
		const firstDate = firstEvent.start.substring(0, 10);
		const secondDate = secondEvent.start.substring(0, 10);
		return firstDate < secondDate ? -1 : firstDate > secondDate ? 1 : 0;
	});
	return eventsArray;
};

const timeCondition = (timeSlot, events, moment) => {
	return !events.find((event) => moment.range(event.start, event.end).contains(timeSlot)); //the condition is that the
};

export const findFreeTimeSlots = async (events, moment) => {
	const timeSlots = await createTimeSlots(moment);
	const freeTimeSlotsArr = timeSlots.filter((timeSlot) => timeCondition(timeSlot, events, moment)); //filter to find only the time slots that answer to the condition
	const freeTimeSlotObj = freeTimeSlotsArr.map((timeSlot) => {
		return timeSlot;
	});
	return freeTimeSlotObj.filter((timeSlot) => {
		const newTimeSlot = timeSlot.toString().substring(16, 24);
		const startHour = '11:00:00';
		const endHour = '24:00:00';
		return newTimeSlot >= startHour && newTimeSlot < endHour;
	});
};

export const createMarkedDates = (freeTimeSlots) => {
	let day = '01';
	let count = 1;
	let currentTimeSlot;
	let markedDates = freeTimeSlots.map((timeSlot) => {
		let timeSlotDay = timeSlot.toString().substring(8, 10);
		if (day != timeSlotDay) {
			day = timeSlotDay;
			currentTimeSlot = currentTimeSlot.substring(0, 10);
			const timeSlotObj = { timeSlot: currentTimeSlot, count: count };
			count = 1;
			return timeSlotObj;
		}
		count = count + 1;
		currentTimeSlot = timeSlot.toJSON();
		return null;
	});
	markedDates = markedDates.filter((dateObj) => dateObj != null);
	markedDates = markedDates.map((markDate) => {
		let color = '';
		if (markDate.count <= 2) {
			color = 'red';
		} else if (markDate.count > 2 && markDate.count <= 4) {
			color = '#ffc107'; //yellow
		} else {
			color = '#81c784'; //green
		}
		var date = markDate.timeSlot;
		var markDatesObj = {};
		markDatesObj[date] = { customStyles: { container: { borderWidth: 1, borderColor: color } } };
		return markDatesObj;
	});

	return Object.assign({}, ...markedDates);
};
