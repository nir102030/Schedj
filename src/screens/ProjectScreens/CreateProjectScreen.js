import React from 'react';
import {View} from 'react-native';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const CreateProjectScreen = ({navigation, addProject}) => {
    return (
        <View>
            <ProjectForm initialValues = {{id: '', name:''}} onSubmit = {(name, minForMeeting) => {
                addProject(name, minForMeeting);
            }}/>
        </View>
    );
};

export default connect(null,actions)(CreateProjectScreen);