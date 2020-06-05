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
		.ref('users/' + calendar.uid + '/calendar')
		.set({
			uid: calendar.uid,
			name: calendar.name,
			events: calendar.events,
		});
};

export const editCalendarInDb = (uid) => {
	var updates = {};
	console.log(uid);
	console.log(calendar);
	updates['users/' + uid + '/calendar'] = calendar;
	firebase.database().ref().update(updates);
};

export const deleteProjectFromDb = (project) => {
	const pid = project.id;
	firebase
		.database()
		.ref('projects/' + pid)
		.remove();
};
