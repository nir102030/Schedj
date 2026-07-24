import { ref, get, set, update, remove } from 'firebase/database';
import { getFirebaseDb } from './config';

export const getAllTasksFromDb = (topic, tasks, addTask) => {
	const pid = topic.pid;
	const topicName = topic.name;
	const tasksRef = ref(getFirebaseDb(), 'projects/' + pid + '/topics/' + topicName + '/tasks');
	get(tasksRef).then((snapshot) => {
		snapshot.forEach((childSnapShot) => {
			const isExsitInState =
				tasks.find((task) => task.tid == childSnapShot.child('tid').val()) == null ? false : true;
			!isExsitInState ? addTask(childSnapShot.val()) : null;
		});
	});
};

export const addTaskToDb = (task) => {
	const pid = task.pid;
	const topic = task.topic;
	const tid = task.tid;
	set(ref(getFirebaseDb(), 'projects/' + pid + '/topics/' + topic + '/tasks/' + tid), {
		pid: task.pid,
		topic: task.topic,
		mid: task.mid,
		tid: task.tid,
		name: task.name,
		description: task.description,
		status: task.status,
		color: task.color,
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
