import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm'
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditMeetingScreen = ({navigation,meetings,editMeeting}) => {
    const mid = navigation.getParam('meeting').mid;
    const pid = navigation.getParam('meeting').pid;
    const meeting = meetings.find((meeting) => meeting.pid === pid && meeting.mid === mid);

    const onSubmit = (meeting) => {
        editMeeting(meeting);
        navigation.pop();
    }
    
    return (
        <MeetingForm 
            oldMeeting = {meeting}
            onSubmit = {(meeting) => onSubmit(meeting)}
        />
    );
};

const mapStateToProps = state => {
    return { meetings: state.meetings };
};

export default connect(mapStateToProps,actions)(EditMeetingScreen);