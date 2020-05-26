import React from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { addProjectToDb } from '../../firebase/projectsAPI';
import firebase from 'firebase';

const CreateProjectScreen = ({ navigation, addProject, users }) => {
	const uid = firebase.auth().currentUser.uid;
	const project = {
		uid: uid,
		id: Math.floor(Math.random() * 99999),
		name: '',
		minForMeeting: '',
		participants: [],
		reminder: '',
		notes: ['', '', ''],
	};

	const onSubmit = (project) => {
		addProject(project);
		addProjectToDb(uid, project);
		const participants = project.participants;
		users.map((user) => {
			participants.find((participant) => {
				participant == user.email;
			})
				? sendPushNotification(user)
				: console.log('participant was not found');
		});
		navigation.pop();
	};

	return <ProjectForm oldProject={project} onSubmit={(project) => onSubmit(project)} type="create" />;
};

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, actions)(CreateProjectScreen);
