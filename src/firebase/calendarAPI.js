import firebase from 'firebase';

export const addCalendarToDb = (calendar) => {
	firebase
		.database()
		.ref('users/' + calendar.uid + '/calendar')
		.set({
			uid: calendar.uid,
			name: calendar.name,
			events: calendar.events,
		});
};

export const editCalendarInDb = (calendar) => {
	var updates = {};
	updates['users/' + calendar.uid + '/calendar'] = calendar;
	firebase.database().ref().update(updates);
};
