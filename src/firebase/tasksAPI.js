import firebase from 'firebase';

export const getAllTasksFromDb = (topic, tasks, addTask) => {
	const pid = topic.pid;
	const topicName = topic.name;
	const ref = firebase.database().ref('projects/' + pid + '/topics/' + topicName + '/tasks');
	ref.once('value', (snapshot) => {
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
	firebase
		.database()
		.ref('projects/' + pid + '/topics/' + topic + '/tasks/' + tid)
		.set({
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
