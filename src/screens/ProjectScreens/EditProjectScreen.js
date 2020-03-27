import React, { useState } from 'react';
import {View} from 'react-native';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditProjectScreen = ({navigation, editProject, projects}) => {
    const id = navigation.getParam('id');
    const project = projects.find((project) => project.id === id);
    
    return (
        <View>
            <ProjectForm 
                oldProject = {project}
                onSubmit = {(project) => {
                    editProject(project);
                }}  
            />
        </View>
    );
};

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps,actions)(EditProjectScreen);