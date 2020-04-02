import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const CreateMeetingScreen = ({navigation, addMeeting}) => {
    const pid = navigation.getParam('project').id;
    const meeting = {pid:pid, mid:'1', date: '', from:'10:00', to: '12:00', place:'',participants: [], notes:['','',''] }

    const onSubmit = (meeting) => {
        addMeeting(meeting);
        navigation.pop();
    }

    return (
        <MeetingForm
            oldMeeting = {meeting}
            onSubmit = {(meeting) => onSubmit(meeting)}
        />
    );
};

export default connect(null,actions)(CreateMeetingScreen);