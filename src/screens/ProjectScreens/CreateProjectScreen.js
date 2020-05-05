import React from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { addProjectToDb } from '../../firebase/config';
import firebase from 'firebase';

const CreateProjectScreen = ({ navigation, addProject }) => {
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
		navigation.pop();
	};

	return <ProjectForm oldProject={project} onSubmit={(project) => onSubmit(project)} type="create" />;
};

export default connect(null, actions)(CreateProjectScreen);
