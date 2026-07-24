import { ref, onValue, get, set, update, remove } from 'firebase/database';
import { getFirebaseDb } from './config';
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
	const projectsRef = ref(getFirebaseDb(), 'projects/');
	onValue(projectsRef, (dbProjects) => {
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
	const projectRef = ref(getFirebaseDb(), 'projects/' + pid);
	get(projectRef).then((snapshot) => {
		addProject(snapshot.val());
	});
};

export const addProjectToDb = (user, project) => {
	set(ref(getFirebaseDb(), 'projects/' + project.id), {
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
	update(ref(getFirebaseDb()), updates);
};

export const deleteProjectFromDb = (project) => {
	const pid = project.id;
	remove(ref(getFirebaseDb(), 'projects/' + pid));
};
