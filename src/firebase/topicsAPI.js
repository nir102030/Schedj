import firebase from 'firebase';

export const getAllTopicsFromDb = (project, topics, addTopic) => {
	const pid = project.id;
	const ref = firebase.database().ref('projects/' + pid + '/topics');
	ref.once('value', (snapshot) => {
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
	firebase
		.database()
		.ref('projects/' + pid + '/topics/' + name)
		.set({
			pid: topic.pid,
			name: topic.name,
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
