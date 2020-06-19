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

export const addProjectToDb = (user, project) => {
	firebase
		.database()
		.ref('projects/' + project.id)
		.set({
			uid: user.uid,
			id: project.id,
			name: project.name,
			participants: project.participants,
			minForMeeting: project.minForMeeting,
			reminder: project.reminder,
			notes: project.notes,
			participantsStatus: project.participantsStatus,
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
