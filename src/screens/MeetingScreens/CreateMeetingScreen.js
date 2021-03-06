import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { addMeetingToDb } from '../../firebase/meetingsAPI';
import { editCalendarInDb } from '../../firebase/calendarAPI';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { sendPushNotification } from '../../firebase/notifications';
import firebase from 'firebase';

const CreateMeetingScreen = ({
	navigation,
	addMeeting,
	meetings,
	users,
	editCalendar,
	editCalendarInDb,
	calendars,
}) => {
	const project = navigation.getParam('project');
	const date = navigation.getParam('date') ? navigation.getParam('date') : 'YYYY-MM-DD';
	//const freeTimeSlots = navigation.getParam('freeTimeSlots') ? navigation.getParam('freeTimeSlots') : null;
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
		date: date,
		from: '           HH:MM',
		to: '           HH:MM',
		place: '',
		participants: [],
		notes: ['', '', ''],
		participantsStatus: [],
		status: 'Waiting',
	};

	const addParticipantToMeeting = (user, meeting, project) => {
		// console.log(calendars);
		// const userCalendar = calendars.find((calendar) => calendar.uid === user.uid);
		// const event = {
		// 	id: Math.floor(Math.random() * 999999),
		// 	start: meeting.from,
		// 	end: meeting.to,
		// 	title: 'Project Meeting',
		// 	type: 'Meeting',
		// };
		// const editedCalendar = { ...userCalendar, events: { ...userCalendar.events, event } };
		// editCalendar(editedCalendar);
		// editCalendarInDb(editedCalendar);
		const msgTitle = 'New Meeting Invetation';
		const msgBody = `You have been added to meeting #${meeting.mid} in ${project.name} project`;
		const data = { type: 'add_meeting', meeting: meeting, project: project };
		sendPushNotification(user, msgTitle, msgBody, data);
	};

	const onSubmit = (meeting, project) => {
		addMeeting(meeting);
		addMeetingToDb(meeting);
		const participants = meeting.participants.filter((participant) => participant !== user.email);
		users.map((user) => {
			participants.map((participant) => {
				participant == user.email ? addParticipantToMeeting(user, meeting, project) : null;
			});
		});
		navigation.navigate('Projects');
	};

	return (
		<MeetingForm
			project={project}
			oldMeeting={meeting}
			onSubmit={(meeting) => onSubmit(meeting, project)}
			type="create"
			users={users}
			meetings={meetings}
		/>
	);
};

CreateMeetingScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<View style={styles.navigator}>
				<Text style={styles.headerStyle}> Add New Meeting </Text>
				<TouchableOpacity onPress={() => navigation.navigate('Projects')}>
					<Image source={require('../../../assets/images/home.png')} style={styles.home} />
				</TouchableOpacity>
			</View>
		),
	};
};

const mapStateToProps = (state) => {
	return { meetings: state.meetings, users: state.users, calendars: state.calendars };
};

export default connect(mapStateToProps, actions)(CreateMeetingScreen);

const styles = StyleSheet.create({
	navigator: {
		flexDirection: 'row',
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginRight: 5,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
	home: {
		height: 35,
		width: 35,
		marginRight: 10,
	},
});
