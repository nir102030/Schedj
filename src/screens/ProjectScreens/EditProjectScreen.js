import React from 'react';
import {View} from 'react-native';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditProjectScreen = ({navigation, editProject, projects}) => {
    const id = navigation.getParam('id');
    console.log(projects);
    const project = projects.find(
        project => project.id === id
    );

    return (
        <View>
            <ProjectForm 
                initialValues = {{
                    name: project.name, 
                    minForMeeting: project.minForMeeting, 
                    participants: project.participants}}
                onSubmit = {(name, minForMeeting) => {
                    editProject(id,name,minForMeeting);
                }}  
            />
        </View>
    );
};

const mapStateToProps = state => {
    return { projects: state.projects };
};

export default connect(mapStateToProps,actions)(EditProjectScreen);