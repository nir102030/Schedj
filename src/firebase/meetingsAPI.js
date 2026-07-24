import { ref, get, set, update, remove } from 'firebase/database';
import { getFirebaseDb } from './config';

export const getAllMeetingsFromDb = (project, meetings, addMeeting) => {
	const pid = project.id;
	const meetingsRef = ref(getFirebaseDb(), 'projects/' + pid + '/meetings');
	get(meetingsRef).then((snapshot) => {
		snapshot.forEach((childSnapShot) => {
			const isExsitInState =
				meetings.find(
					(meeting) =>
						meeting.mid == childSnapShot.child('mid').val() &&
						meeting.pid == childSnapShot.child('pid').val()
				) == null
					? false
					: true;
			!isExsitInState ? addMeeting(childSnapShot.val()) : null;
		});
	});
};

export const getMeetingFromDb = (meeting, addMeeting) => {
	const pid = meeting.pid;
	const mid = meeting.mid;
	const meetingRef = ref(getFirebaseDb(), 'projects/' + pid + '/meetings/' + mid);
	get(meetingRef).then((snapshot) => {
		addMeeting(snapshot.val());
	});
};

export const addMeetingToDb = (meeting) => {
	const pid = meeting.pid;
	const mid = meeting.mid;
	set(ref(getFirebaseDb(), 'projects/' + pid + '/meetings/' + mid), {
		pid: meeting.pid,
		mid: meeting.mid,
		date: meeting.date,
		from: meeting.from,
		to: meeting.to,
		place: meeting.place,
		participants: meeting.participants,
		notes: meeting.notes,
	});
};

export const editMeetingInDb = (meeting) => {
	const pid = meeting.pid;
	const mid = meeting.mid;
	var updates = {};
	updates['projects/' + pid + '/meetings/' + mid] = meeting;
	update(ref(getFirebaseDb()), updates);
};

export const deleteMeetingFromDb = (meeting) => {
	const pid = meeting.pid;
	const mid = meeting.mid;
	remove(ref(getFirebaseDb(), 'projects/' + pid + '/meetings/' + mid));
};
