import firebase from 'firebase';

export const getAllProjectsFromDb = (user, projects, addProject) => {
	const ref = firebase.database().ref('projects/');
	ref.once('value', (snapshot) => {
		snapshot.forEach((childSnapShot) => {
			const isExsitInState =
				projects.find((project) => project.id == childSnapShot.child('id').val()) == null ? false : true;
			const participants = childSnapShot.child('participants').val();
			participants.map((participant) => {
				console.log(participant);
				console.log(user.email);
				participant == user.email && !isExsitInState ? addProject(childSnapShot.val()) : null;
			});
		});
	});
};

export const addProjectToDb = (uid, project) => {
	firebase
		.database()
		.ref('projects/' + project.id)
		.set({
			uid: uid,
			id: project.id,
			name: project.name,
			participants: project.participants,
			minForMeeting: project.minForMeeting,
			reminder: project.reminder,
			notes: project.notes,
		});
};

export const editProjectInDb = (project, projectMeetings) => {
	const pid = project.id;
	const dbProject = { ...project, meetings: projectMeetings };
	var updates = {};
	updates['projects/' + pid] = dbProject;
	firebase.database().ref().update(updates);
};

export const deleteProjectFromDb = (project) => {
	const pid = project.id;
	firebase
		.database()
		.ref('projects/' + pid)
		.remove();
};
