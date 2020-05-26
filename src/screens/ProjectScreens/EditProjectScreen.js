import React, { useState } from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import { editProjectInDb } from '../../firebase/projectsAPI';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditProjectScreen = ({ navigation, editProject, projects, meetings }) => {
	const id = navigation.getParam('project').id;
	const project = projects.find((project) => project.id === id);
	const projectMeetings = meetings.filter((meeting) => meeting.pid === id);

	const onSubmit = (project) => {
		editProject(project);
		editProjectInDb(project, projectMeetings);
		navigation.pop();
	};

	return <ProjectForm oldProject={project} onSubmit={(project) => onSubmit(project)} type="edit" />;
};

const mapStateToProps = (state) => {
	return { projects: state.projects, meetings: state.meetings };
};

export default connect(mapStateToProps, actions)(EditProjectScreen);
