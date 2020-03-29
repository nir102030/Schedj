import React from 'react';
import {View} from 'react-native';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const CreateProjectScreen = ({navigation, addProject}) => {
<<<<<<< HEAD
    const project = {id: '', name:'', minForMeeting: '', participants:[], reminder: '' ,notes: ['','','']}
=======
    const project = {id: '', name: '', minForMeeting: '', participants:[], reminder: '',notes: ['','','']}
>>>>>>> 03d9acbda043f4dacebf1a772b4dadd7d0300b3b

    return (
        <View>
            <ProjectForm 
                oldProject = {project}
                onSubmit = {(project) => {
                    addProject(project);
                }}
            />
        </View>
    );
};

export default connect(null,actions)(CreateProjectScreen);