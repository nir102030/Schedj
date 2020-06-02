import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm';
import { addMeetingToDb } from '../../firebase/meetingsAPI';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { sendPushNotification } from '../../firebase/notifications';
import firebase from 'firebase';

const CreateMeetingScreen = ({ navigation, addMeeting, meetings, users }) => {
	const project = navigation.getParam('project');
	const projectMeetings = meetings.filter((meeting) => meeting.pid === project.id);
	const user = firebase.auth().currentUser;
	const maxMeetingIndx =
		projectMeetings == ''
			? -1
			: Math.max.apply(
					Math,
					projectMeetings.map(function (meeting) {
						return meeting.mid;
					})
			  );
	const meeting = {
		creator: user.uid,
		pid: project.id,
		mid: maxMeetingIndx + 1,
		date: '',
		from: '00:00',
		to: '00:00',
		place: '',
		participants: [],
		notes: ['', '', ''],
	};

	const addParticipantToMeeting = (user, meeting) => {
		const msgTitle = 'New Meeting Invetation';
		const msgBody = `You have been added to meeting #${meeting.mid} in ${project.name} project`;
		const data = { type: 'add_meeting', meeting: meeting };
		sendPushNotification(user, msgTitle, msgBody, data);
	};

	const onSubmit = (meeting) => {
		addMeeting(meeting);
		addMeetingToDb(meeting);
		const participants = meeting.participants;
		users.map((user) => {
			participants.map((participant) => {
				participant == user.email ? addParticipantToMeeting(user, meeting) : null;
			});
		});
		navigation.pop();
	};

	return (
		<MeetingForm project={project} oldMeeting={meeting} onSubmit={(meeting) => onSubmit(meeting)} type="create" />
	);
};

const mapStateToProps = (state) => {
	return { meetings: state.meetings, users: state.users };
};

export default connect(mapStateToProps, actions)(CreateMeetingScreen);
