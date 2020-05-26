import firebase from 'firebase';

export const getAllMeetingsFromDb = (project, meetings, addMeeting) => {
	const pid = project.id;
	const ref = firebase.database().ref('projects/' + pid + '/meetings');
	ref.once('value', (snapshot) => {
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

export const addMeetingToDb = (meeting) => {
	const pid = meeting.pid;
	const mid = meeting.mid;
	firebase
		.database()
		.ref('projects/' + pid + '/meetings/' + mid)
		.set({
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
	firebase.database().ref().update(updates);
};

export const deleteMeetingFromDb = (meeting) => {
	const pid = meeting.pid;
	const mid = meeting.mid;
	firebase
		.database()
		.ref('projects/' + pid + '/meetings/' + mid)
		.remove();
};
