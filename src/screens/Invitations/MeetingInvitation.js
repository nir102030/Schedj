import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { editMeetingInDb, getMeetingFromDb } from '../../firebase/meetingsAPI';

const MeetingInvitation = ({ Owner, pid, navigation, addMeeting, users }) => {
	const meeting = navigation.getParam('meeting');
	const project = navigation.getParam('project');
	const currentUser = firebase.auth().currentUser;
	const user = users.find((user) => user.email == currentUser.email);

	const approveMeeting = () => {
		const editedParticipantsStatus = meeting.participantsStatus.map((participantStatus) => {
			return participantStatus.participant == currentUser.email
				? { ...participantStatus, status: true }
				: participantStatus;
		});
		const meetingStatus = editedParticipantsStatus.find((participantStatus) => participantStatus.status == false)
			? 'Waiting'
			: 'Approved';
		const editedMeeting = { ...meeting, participantsStatus: editedParticipantsStatus, status: meetingStatus }; //the same project object with the updated status
		editMeetingInDb(editedMeeting);
		getMeetingFromDb(meeting, addMeeting);
		navigation.navigate('Meetings', { project });
	};

	const removeParticipantFromMeeting = () => {
		const newParticipants = meeting.participants.filter((participant) => participant != currentUser.email); //remove the current user from the particiaptns list
		const newParticipantsStatus = meeting.participantsStatus.filter(
			//remove the current user from the particiaptns status list
			(participantStatus) => participantStatus.participant != currentUser.email
		);
		const editedMeeting = { ...meeting, participants: newParticipants, participantsStatus: newParticipantsStatus };
		editMeetingInDb(editedMeeting);
		navigation.navigate('Meetings', { project });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.Hello}>Hello {user.profileName}</Text>
			<Text style={styles.Text}>New meeting has been scheduled! </Text>
			<Text style={styles.projName}>{project.name}</Text>
			<Text style={styles.Text}>On date: {meeting.date.substring(0, 10)} </Text>
			<Text style={styles.Text}>
				From: {meeting.from.substring(11, 16)} To: {meeting.to.substring(11, 16)}
			</Text>
			<Text style={styles.Text1}>Would you like to approve the invitation ? </Text>
			<TouchableOpacity style={styles.TouchableOpacity} onPress={approveMeeting}>
				<Image source={require('../../../assets/images/vv.png')} style={styles.image} onPress={() => {}} />
				<Text style={styles.answer}>Yes, I'm willing to share my schedule</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.TouchableOpacity}>
				<Text style={styles.Text2}> Check it out here !!</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.TouchableOpacity} onPress={removeParticipantFromMeeting}>
				<Image source={require('../../../assets/images/xx.png')} style={styles.image} onPress={() => {}} />
				<Text style={styles.answer}>No, Reject the invitation</Text>
			</TouchableOpacity>
			{/* <Image source={require('../../../assets/images/schedjTry.png')} style={styles.schedj} /> */}
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
	Text3: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
		color: '#263238',
		paddingLeft: 10,
		flex: 1,
	},
	TouchableOpacity: {
		flex: 1,
		flexDirection: 'row-reverse',
		borderBottomWidth: 3,
		borderBottomColor: 'white',
		backgroundColor: '#a1cfd5',
	},
	answer: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 20,
		marginHorizontal: 10,
		color: 'white',
		alignSelf: 'center',
	},
	Text: {
		fontSize: 23,
		marginVertical: 10,
		color: '#263238',
		paddingLeft: 10,
	},
	Text1: {
		fontSize: 23,
		marginVertical: 10,
		color: '#263238',
		paddingLeft: 10,
		fontWeight: 'bold',
	},
	projName: {
		fontWeight: 'bold',
		fontSize: 35,
		marginVertical: 20,
		paddingLeft: 10,
		color: '#263238',
		textAlign: 'center',
	},
	image: {
		height: 35,
		width: 35,
		marginRight: 15,
		alignSelf: 'center',
	},
	Text2: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 20,
		marginHorizontal: 10,
		color: 'white',
		alignSelf: 'center',
	},
	schedj: {
		height: 200,
		width: 180,
		borderRadius: 10,
		alignSelf: 'center',
		marginVertical: 35,
	},
});

const mapStateToProps = (state) => {
	return { users: state.users };
};

export default connect(mapStateToProps, actions)(MeetingInvitation);
