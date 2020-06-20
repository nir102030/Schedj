import React, { useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, Image, ScrollView } from 'react-native';
import MeetingComp from './MeetingComp';
import { getAllMeetingsFromDb } from '../../firebase/meetingsAPI';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const MeetingsList = ({ meetings, project, style, deleteMeeting, addMeeting }) => {
	const user = firebase.auth().currentUser;
	const meetingsList = meetings.filter(
		(meeting) => meeting.pid == project.id && meeting.participants.find((participant) => participant == user.email)
	);

	useEffect(() => {
		getAllMeetingsFromDb(project, meetings, addMeeting);
	}, [project]);

	function Item({ item }) {
		return (
			<View style={styles.item}>
				<MeetingComp project={project} meeting={item} deleteMeeting={deleteMeeting} />
			</View>
		);
	}
	return (
		<View style={style}>
			<ScrollView>
				<View style={styles.header}>
					{/* <Text style={styles.text}>{project.name} Meetings</Text>
                    <Image source={require('../../../assets/images/meeting_logo.png')} style={styles.image}/> */}
				</View>
				<FlatList
					data={meetingsList}
					keyExtractor={(meeting) => meeting.mid}
					renderItem={({ item }) => <Item item={item} />}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		marginVertical: 5,
	},
	header: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		// borderBottomWidth:5,
		// borderBottomColor:'#2d6886',
		backgroundColor: '#8aa9b9',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 34,
		alignSelf: 'center',
		color: '#263238',
		flex: 4,
	},
	image: {
		marginVertical: 10,
		height: 60,
		width: 60,
		borderRadius: 5,
		marginRight: 15,
		alignSelf: 'center',
		flex: 1,
	},
});

const mapStateToProps = (state) => {
	return { meetings: state.meetings };
};

export default connect(mapStateToProps, actions)(MeetingsList);
