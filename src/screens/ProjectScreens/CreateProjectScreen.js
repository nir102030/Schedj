import React from 'react';
import ProjectForm from '../../components/projectsComponents/ProjectForm';
import { Text, StyleSheet, View, Image, ScrollView,TouchableOpacity } from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { addProjectToDb } from '../../firebase/projectsAPI';
import firebase from 'firebase';
import { sendPushNotification } from '../../firebase/notifications';

const CreateProjectScreen = ({ navigation, addProject, users }) => {
	const user = firebase.auth().currentUser;
	const project = {
		uid: user.uid,
		id: Math.floor(Math.random() * 99999),
		name: '',
		minForMeeting: '',
		participants: [],
		reminder: '',
		notes: ['', '', ''],
	};

	const addParticipantToProject = (user, project) => {
		const msgTitle = 'New Project Invitation';
		const msgBody = `You have been added to ${project.name} project`;
		const data = { type: 'add_project', project: project };
		sendPushNotification(user, msgTitle, msgBody, data);
	};

	const onSubmit = (project) => {
		addProject(project);
		addProjectToDb(user, project);
		const participants = project.participants.filter((participant) => participant !== user.email)
		console.log(participants);
		users.map((user) => {
			participants.map((participant) => {
				participant == user.email ? addParticipantToProject(user, project) : null;
			});
		});
		navigation.pop();
	};

	return <ProjectForm oldProject={project} onSubmit={(project) => onSubmit(project)} type="create" />;
};

const mapStateToProps = (state) => {
	return { users: state.users };
};

CreateProjectScreen.navigationOptions = ({navigation}) => { 
    return{ headerRight:   
            <View style={styles.navigator}>
                <Text style={styles.headerStyle}> Add New Project </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
    };
};
export default connect(mapStateToProps, actions)(CreateProjectScreen);


const styles = StyleSheet.create({
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
	home: {
		height: 35,
        width: 35,
        marginRight:10
	}
});

