import React from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const CreateProjectScreen = ({navigation, addProject}) => {
    const project = {id: '', name:'', minForMeeting: '', participants:[], reminder: '' ,notes: ['','','']}
    
    const onSubmit = (project) => {
        addProject(project);
        navigation.pop();
    }

    return (
        <ProjectForm 
            oldProject = {project}
            onSubmit = {(project) => onSubmit(project)}
        />
    );
};

export default connect(null,actions)(CreateProjectScreen);