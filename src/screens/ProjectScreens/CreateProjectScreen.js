import React from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { addProjectToDb } from '../../firebase/projectsAPI';
import firebase from 'firebase';
import { sendPushNotification } from '../../firebase/notifications';

const CreateProjectScreen = ({ navigation, addProject, users }) => {
	const user = firebase.auth().currentUser;
	const project = {
		uid: user.uid,
		id: Math.floor(Math.random() * 99999),
		name: '',
		minForMeeting: '',
		participants: [],
		reminder: '',
		notes: ['', '', ''],
	};

	const addParticipantToProject = (user, project) => {
		const msgTitle = 'New Project Invetation';
		const msgBody = `You have been added to ${project.name} project`;
		sendPushNotification(user, msgTitle, msgBody, project);
	};

	const onSubmit = (project) => {
		addProject(project);
		addProjectToDb(user, project);
		const participants = project.participants;
		console.log(participants);
		users.map((user) => {
			participants.map((participant) => {
				participant == user.email ? addParticipantToProject(user, project) : null;
			});
		});
		navigation.pop();
	};

	return <ProjectForm oldProject={project} onSubmit={(project) => onSubmit(project)} type="create" />;
};

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, actions)(CreateProjectScreen);
