import React, { useState } from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
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

EditProjectScreen.navigationOptions = ({navigation}) => { 
    return{ headerRight:   
            <View style={styles.navigator}>
                <Text style={styles.headerStyle}> Edit Project </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
    };
};

export default connect(mapStateToProps, actions)(EditProjectScreen);

const styles = StyleSheet.create({
    home: {
		height: 35,
        width: 35,
        marginRight:10
    },
    navigator:{
        flexDirection: 'row',
    },
    headerStyle: { 
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 5,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },  
});
