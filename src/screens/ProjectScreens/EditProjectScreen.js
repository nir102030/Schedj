import React from 'react';
import {View} from 'react-native';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditProjectScreen = ({navigation, editProject, projects}) => {
    const id = navigation.getParam('id');

    const project = projects.find(
        project => project.id === id
    );

    return (
        <View>
            <ProjectForm 
                initialValues = {{name: project.name}}
                onSubmit = {(name) => {
                    editProject(id,name);
                }}  
            />
        </View>
    );
};

export default connect(null,actions)(EditProjectScreen);