import { ref, set, update } from 'firebase/database';
import { getFirebaseDb } from './config';

export const addCalendarToDb = (calendar) => {
	set(ref(getFirebaseDb(), 'users/' + calendar.uid + '/calendar'), {
		uid: calendar.uid,
		name: calendar.name,
		events: calendar.events,
	});
};

export const editCalendarInDb = (calendar) => {
	var updates = {};
	updates['users/' + calendar.uid + '/calendar'] = calendar;
	update(ref(getFirebaseDb()), updates);
};
