import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';
import Spacer from '../../components/genericComponents/Spacer';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { editProjectInDb, getProjectFromDb } from '../../firebase/projectsAPI';

const ProjectInvitation = ({ navigation, addProject }) => {
	const project = navigation.getParam('project');
	const currentUser = firebase.auth().currentUser;

	const approveProject = () => {
		const editedParticipantsStatus = project.participantsStatus.map((participantStatus) => {
			return participantStatus.participant == currentUser.email
				? { ...participantStatus, status: true }
				: participantStatus;
		});
		const projectStatus = editedParticipantsStatus.find((participantStatus) => participantStatus.status == false)
			? 'Waiting'
			: 'Approved';
		const editedProject = { ...project, participantsStatus: editedParticipantsStatus, status: projectStatus }; //the same project object with the updated status
		editProjectInDb(editedProject, []);
		getProjectFromDb(project.id, addProject);
		navigation.navigate('Projects');
	};

	const removeParticipantFromProject = () => {
		const newParticipants = project.participants.filter((participant) => participant != currentUser.email);
		const newParticipantsStatus = project.participantsStatus.filter(
			(participantStatus) => participantStatus.participant != currentUser.email
		);
		const editedProject = { ...project, participants: newParticipants, participantsStatus: newParticipantsStatus };
		editProjectInDb(editedProject, []);
		navigation.navigate('Projects');
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.Hello}>Hello {currentUser.email}</Text>
				<Text style={styles.Text}>You got a new invitation for:</Text>
				<Spacer />
				<Text style={styles.Text1}>{project.name}</Text>
				<Spacer />
				{/* <Text style={styles.Text2}>Rest of the team includes : </Text>
				<FlatList
					data={project.participants}
					keyExtractor={(participant) => participant}
					renderItem={({ participant }) => <Text>{participant}</Text>}
				/>
				<Spacer /> */}
				<Text style={styles.Text}>Would you like to approve the invitation ? </Text>
				<TouchableOpacity style={styles.TouchableOpacity} onPress={approveProject}>
					<Image source={require('../../../assets/images/vv.png')} style={styles.image} onPress={() => {}} />
					<Text style={styles.answer}>Yes, I'm willing to share my schedule</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacity}>
					<Image
						source={require('../../../assets/images/calendar_icon.png')}
						style={styles.image}
						onPress={() => {}}
					/>
					<Text style={styles.answer}>I would like to change my schedule </Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacity} onPress={removeParticipantFromProject}>
					<Image source={require('../../../assets/images/xx.png')} style={styles.image} onPress={() => {}} />
					<Text style={styles.answer}>No, Reject the invitation</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8f1f9',
		height: '100%',
	},
	Hello: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 10,
		color: '#263238',
		textAlign: 'right',
	},
	Text: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
		color: '#263238',
		paddingLeft: 10,
		flex: 1,
	},
	Text1: {
		fontWeight: 'bold',
		fontSize: 23,
		marginVertical: 10,
		color: '#3a8992',
		paddingLeft: 10,
		flex: 1,
		alignSelf: 'center',
		fontSize: 25,
	},
	Text2: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
		color: '#263238',
		paddingLeft: 10,
		flex: 1,
	},
	Text4: {
		paddingBottom: 140,
	},
	projName: {
		fontWeight: 'bold',
		fontSize: 35,
		marginVertical: 10,
		paddingLeft: 10,
		color: '#40b1bf',
		backgroundColor: '#375360',
		flex: 1,
	},
	TouchableOpacity: {
		flex: 1,
		flexDirection: 'row-reverse',
		borderBottomWidth: 3,
		borderBottomColor: 'white',
		backgroundColor: '#a1cfd5',
	},
	image: {
		height: 24,
		width: 24,
		marginRight: 15,
		alignSelf: 'center',
	},
	answer: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 20,
		marginHorizontal: 10,
		color: 'white',
		alignSelf: 'center',
	},
});

export default connect(null, actions)(withNavigation(ProjectInvitation));
