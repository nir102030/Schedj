import firebase from 'firebase';

export const getAllProjectsFromDb = (user, projects, addProject) => {
	const ref = firebase.database().ref('projects/');
	ref.once('value', (snapshot) => {
		snapshot.forEach((childSnapShot) => {
			const isExsitInState =
				projects.find((project) => project.id == childSnapShot.child('id').val()) == null ? false : true;
			const participants = childSnapShot.child('participants').val();
			participants.map((participant) => {
				participant == user.email && !isExsitInState ? addProject(childSnapShot.val()) : null;
			});
		});
	});
};

export const getProjectFromDb = (pid, addProject) => {
	const ref = firebase.database().ref('projects/' + pid);
	ref.once('value', (snapshot) => {
		addProject(snapshot.val());
	});
};

export const addCalendarToDb = (calendar) => {
	firebase
		.database()
		.ref('users/' + calendar.uid + '/calendar/' + calendar.cid)
		.set({
			cid: calendar.cid,
			uid: calendar.uid,
			name: calendar.name,
			events: calendar.events,
		});
};

export const editCalendarInDb = (calendar) => {
	const cid = calendar.cid;
	const uid = calendar.uid;
	var updates = {};
	console.log(cid);
	console.log(uid);
	updates['users/' + uid + '/calendar/' + cid] = calendar;
	firebase.database().ref().update(updates);
};

export const deleteProjectFromDb = (project) => {
	const pid = project.id;
	firebase
		.database()
		.ref('projects/' + pid)
		.remove();
};
