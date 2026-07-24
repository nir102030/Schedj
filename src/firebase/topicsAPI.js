import { ref, get, set, update, remove } from 'firebase/database';
import { getFirebaseDb } from './config';

export const getAllTopicsFromDb = (project, topics, addTopic) => {
	const pid = project.id;
	const topicsRef = ref(getFirebaseDb(), 'projects/' + pid + '/topics');
	get(topicsRef).then((snapshot) => {
		snapshot.forEach((childSnapShot) => {
			const isExsitInState =
				topics.find(
					(topic) =>
						topic.name == childSnapShot.child('name').val() && topic.pid == childSnapShot.child('pid').val()
				) == null
					? false
					: true;
			!isExsitInState ? addTopic(childSnapShot.val()) : null;
		});
	});
};

export const addTopicToDb = (topic) => {
	const pid = topic.pid;
	const name = topic.name;
	set(ref(getFirebaseDb(), 'projects/' + pid + '/topics/' + name), {
		pid: topic.pid,
		name: topic.name,
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
