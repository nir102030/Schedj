import firebase from 'firebase';
import store from '../redux/store';
import { editMeeting, addMeeting } from '../actions';

const editData = (editProject, dbProject) => {
	editProject(dbProject.val());
	const meetings = store.getState().meetings;
	const dbMeetings = dbProject.child('meetings').val();
	if (dbMeetings) {
		dbMeetings.map((dbMeeting) => {
			if (meetings) {
				meetings.find((meeting) => meeting.mid == dbMeeting.mid)
					? editMeeting(dbMeeting)
					: addMeeting(dbMeeting);
			}
		});
	}
};

export const getAllProjectsFromDb = async (user, addProject, editProject) => {
	const ref = firebase.database().ref('projects/');
	ref.on('value', (dbProjects) => {
		const state = store.getState();
		const projects = state.projects;
		dbProjects.forEach((dbProject) => {
			const isExsitInState = projects.find((project) => project.id == dbProject.child('id').val()) ? true : false;
			const participants = dbProject.child('participants').val();
			if (participants) {
				participants.map((participant) => {
					participant == user.email && !isExsitInState
						? addProject(dbProject.val())
						: editData(editProject, dbProject);
				});
			}
		});
	});
	return true;
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
			date: project.date,
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
