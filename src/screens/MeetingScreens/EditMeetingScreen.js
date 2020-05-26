import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm';
import { editMeetingInDb } from '../../firebase/meetingsAPI';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditMeetingScreen = ({ navigation, editMeeting }) => {
	const meeting = navigation.getParam('meeting');
	const project = navigation.getParam('project');

	const onSubmit = (meeting) => {
		editMeeting(meeting);
		editMeetingInDb(meeting);
		navigation.pop();
	};

	return <MeetingForm project={project} oldMeeting={meeting} onSubmit={(meeting) => onSubmit(meeting)} type="edit" />;
};

export default connect(null, actions)(EditMeetingScreen);
