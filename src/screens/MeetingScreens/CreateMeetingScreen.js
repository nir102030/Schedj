import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const CreateMeetingScreen = ({navigation, addMeeting, meetings}) => {
    const pid = navigation.getParam('project').id;
    const projectMeetings = meetings.filter((meeting) => meeting.pid === pid);
    const maxMeetingIndx = 
            projectMeetings == ""
            ? 0 :
            Math.max.apply(Math, projectMeetings.map(function(meeting) { return meeting.mid; }))
    const meeting = {pid:pid, mid:maxMeetingIndx + 1, date: '', from:'00:00', to: '00:00', place:'',participants: [], notes:['','',''] }

    const onSubmit = (meeting) => {
        addMeeting(meeting);
        navigation.pop();
    }

    return (
        <MeetingForm
            oldMeeting = {meeting}
            onSubmit = {(meeting) => onSubmit(meeting)}
            type = 'create'
        />
    );
};

const mapStateToProps = state => {
    return { meetings: state.meetings }
};

export default connect(mapStateToProps,actions)(CreateMeetingScreen)