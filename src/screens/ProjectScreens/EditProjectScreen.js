import React from 'react';
import {View} from 'react-native';
import ProjectForm from '../../components/projectsComponents/ProjectForm';

const EditProjectScreen = ({navigation}) => {
    const pid = navigation.getParam('pid');
    return (
        <View>
            <ProjectForm pid={pid}/>
        </View>
    );
};

export default EditProjectScreen;