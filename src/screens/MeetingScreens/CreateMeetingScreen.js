import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm';
import { addMeetingToDb } from '../../firebase/meetingsAPI';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const CreateMeetingScreen = ({ navigation, addMeeting, meetings }) => {
	const project = navigation.getParam('project');
	const projectMeetings = meetings.filter((meeting) => meeting.pid === project.id);
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
		pid: project.id,
		mid: maxMeetingIndx + 1,
		date: '',
		from: '00:00',
		to: '00:00',
		place: '',
		participants: [],
		notes: ['', '', ''],
	};

	const onSubmit = (meeting) => {
		addMeeting(meeting);
		addMeetingToDb(meeting);
		navigation.pop();
	};

	return (
		<MeetingForm project={project} oldMeeting={meeting} onSubmit={(meeting) => onSubmit(meeting)} type="create" />
	);
};

const mapStateToProps = (state) => {
	return { meetings: state.meetings };
};

export default connect(mapStateToProps, actions)(CreateMeetingScreen);
