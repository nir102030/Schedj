import React, { useState } from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditProjectScreen = ({navigation, editProject, projects}) => {
    const id = navigation.getParam('project').id;
    const project = projects.find((project) => project.id === id);

    const onSubmit = (project) => {
        editProject(project);
        navigation.pop();
    }
    
    return (
        <ProjectForm 
            oldProject = {project}
            onSubmit = {(project) => onSubmit(project)}
        />
    );
};

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps,actions)(EditProjectScreen);