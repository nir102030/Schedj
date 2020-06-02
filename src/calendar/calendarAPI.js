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
	const startDate = new Date('December 17, 2019 03:24:00');
	const endDate = new Date('December 17, 2020 03:24:00');
	const events = await Calendar.getEventsAsync(calendarIds, startDate, endDate);
	const calendar = { cid: newCalendarID, uid: user.uid, name: user.email, events: events };
	addCalendar(calendar);
};
