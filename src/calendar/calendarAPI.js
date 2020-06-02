import * as Calendar from 'expo-calendar';

export const getCalendarPermission = async () => {
	const { status } = await Calendar.requestCalendarPermissionsAsync();
	if (status === 'granted') {
		// const calendars = await Calendar.getCalendarsAsync();
		// console.log('Here are all your calendars:');
		// console.log({ calendars });
	}
};

async function getDefaultCalendarSource() {
	const calendars = await Calendar.getCalendarsAsync();
	const defaultCalendars = calendars.filter((each) => each.source.name === 'Default');
	return defaultCalendars[0].source;
}

export const createCalendar = async (addCalendar, user) => {
	const defaultCalendarSource =
		Platform.OS === 'ios' ? await getDefaultCalendarSource() : { isLocalAccount: true, name: 'My Calendar' };
	const newCalendarID = await Calendar.createCalendarAsync({
		title: 'My Calendar',
		color: 'blue',
		entityType: Calendar.EntityTypes.EVENT,
		sourceId: defaultCalendarSource.id,
		source: defaultCalendarSource,
		name: 'MyProjectCalendar',
		ownerAccount: 'personal',
		accessLevel: Calendar.CalendarAccessLevel.OWNER,
	});
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
	const calendar = { cid: newCalendarID, uid: user.uid, name: user.email, events: events };
	addCalendar(calendar);
};
