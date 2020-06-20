import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FormDatePicker from '../../components/genericComponents/FormDatePicker';
import FormInput from '../../components/genericComponents/FormInput';
import FormHour from '../../components/genericComponents/FormHour';
import TimePicker from 'react-native-24h-timepicker';
import FormNewDatePicker from '../genericComponents/FormNewDatePicker';
import FormSubmitButton from '../genericComponents/FormSubmitButton';
import FormNotes from '../genericComponents/FormNotes';
import FormMultiSelect from '../genericComponents/FormMultiSelect';
import Spacer from '../genericComponents/Spacer';
import FormSectionedMultiSelectHours from '../genericComponents/FormSectionedMultiSelectHours';
import { createEventsArray, findFreeTimeSlots } from '../../calendar/calendarAPI';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import Spinner from '../../components/genericComponents/Spinner';
import firebase from 'firebase';

const MeetingForm = ({ project, oldMeeting, onSubmit, type, users, meetings }) => {
	const [meeting, setMeeting] = useState(oldMeeting);
	const [freeTimeSlots, setFreeTimeSlots] = useState([]);
	const [freeTimesList, setFreeTimesList] = useState([]);
	const [loading, setLoading] = useState([]);
	const currentUser = firebase.auth().currentUser;

	const validation = () => {
		if (meeting.participants.length == 0) {
			alert('You must add at least one participant!');
		} else {
			onSubmit(meeting);
		}
	};

	const getParticipantsStatus = (participants, oldParticipants) => {
		return participants
			? participants.map((participant) => {
					const isCurrentUser = participant == currentUser.email;
					if (isCurrentUser) {
						return { participant: participant, status: true };
					} else if (type == 'create') {
						return { participant: participant, status: false };
					} else {
						const isNewParticipant = oldParticipants.find((oldParticipant) => oldParticipant == participant)
							? false
							: true;
						if (isNewParticipant) {
							return { participant: participant, status: false };
						} else {
							return project.participantsStatus.find(
								(participantStatus) => participantStatus.participant == participant
							);
						}
					}
			  })
			: [];
	};

	const renderFreeTimeSlots = () => {
		return freeTimeSlots ? (
			<FormSectionedMultiSelectHours hours={freeTimesList} addHoursToMeeting={addHoursToMeeting} />
		) : null;
	};

	const initiateFreeTimesListChildren = (freeTimeSlots, date) => {
		const filteredTimeSlots = freeTimeSlots.filter(
			(timeSlot) => timeSlot.toJSON().substring(0, 10) == date.substring(0, 10)
		);
		const childrenList = filteredTimeSlots.map((timeSlot) => {
			let to = new Date(timeSlot);
			to.setTime(to.getTime() - 2 * 60 * 60 * 1000);
			const from = timeSlot.toJSON().substring(11, 16);
			to = to.toString().substring(16, 21);
			const time = `${from}-${to}`;
			return { name: time, id: time };
		});
		setFreeTimesList([{ name: '  Pick Hours', id: '  Pick Hours', children: childrenList }]);
	};

	const addHoursToMeeting = (selectedItems) => {
		selectedItems.map((selectedItem) => {
			let from = selectedItem.substring(0, 5);
			let to = selectedItem.substring(6, 11);
			from = `${meeting.date.substring(0, 10)}T${from}:00:000`;
			to = `${meeting.date.substring(0, 10)}T${to}:00:000`;
			setMeeting({ ...meeting, from: from, to: to });
		});
	};

	const initiateArraysAsync = async () => {
		const moment = extendMoment(Moment);
		let promise2 = new Promise((resolve, reject) => {
			resolve(createEventsArray(project, project.participants, users, meetings));
		});
		const result2 = await promise2;

		let promise3 = new Promise((resolve, reject) => {
			resolve(findFreeTimeSlots(result2, moment));
		});
		const result3 = await promise3;
		setFreeTimeSlots(result3);
		let promise4 = new Promise((resolve, reject) => {
			resolve(initiateFreeTimesListChildren(result3, meeting.date));
		});
		setLoading(false);
	};
	useEffect(() => {
		initiateArraysAsync();
	}, []);

	const renderForm = () => {
		return loading ? (
			<Spinner />
		) : (
			<View>
				<View style={styles.header}>
					<Text style={styles.headerStyle}>Meeting {meeting.mid + 1}</Text>
				</View>
				<ScrollView>
					<Text style={styles.fillRequired}> Please fill the required fields </Text>
					<View style={styles.designSquare}>
						<View style={styles.sameRow1}>
							<View style={{ flex: 1 }}>
								<FormNewDatePicker
									date={meeting.date}
									onConfirm={(date) => {
										setMeeting({ ...meeting, date: date });
										initiateFreeTimesListChildren(freeTimeSlots, date);
									}}
									type="date"
									imageSrc={require('../../../assets/images/Cal.png')}
									startIndex={0}
									endIndex={10}
								/>
							</View>
							<TouchableOpacity style={styles.multiSelect}>
								<FormSectionedMultiSelectHours
									hours={freeTimesList}
									addHoursToMeeting={addHoursToMeeting}
								/>
							</TouchableOpacity>
						</View>

						<View style={styles.sameRow}>
							<FormNewDatePicker
								date={meeting.to}
								onConfirm={(to) => setMeeting({ ...meeting, to: to })}
								type="time"
								imageSrc={require('../../../assets/images/clockTo.png')}
								startIndex={11}
								endIndex={16}
							/>
							<FormNewDatePicker
								date={meeting.from}
								onConfirm={(from) => setMeeting({ ...meeting, from: from })}
								type="time"
								imageSrc={require('../../../assets/images/clockFrom.png')}
								startIndex={11}
								endIndex={16}
							/>
						</View>
					</View>
					<FormInput
						title=" Place Of Meeting"
						value={meeting.place}
						onChange={(place) => setMeeting({ ...meeting, place: place })}
						viewStyle={styles.designSquare}
					/>
					<FormMultiSelect
						list={project.participants.map((participant) => {
							return { id: participant, name: participant };
						})}
						addItemsToList={(participants) => {
							const oldParticipants = meeting.participants;
							const participantsStatus = getParticipantsStatus(participants, oldParticipants);
							setMeeting({
								...meeting,
								participants: participants,
								participantsStatus: participantsStatus,
							});
						}}
						type="Participants"
					/>
					<Spacer />
					<Text style={styles.note}> Write your notes here! </Text>
					<FormNotes notes={meeting.notes} setNotes={(notes) => setMeeting({ ...meeting, notes: notes })} />
					<View style={styles.space}>
						<FormSubmitButton onSubmit={() => validation()} type={type} />
					</View>
				</ScrollView>
			</View>
		);
	};

	return <View style={styles.container}>{renderForm()}</View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8f1f9',
		flex: 1,
	},
	space:{
		marginVertical: 20,
		paddingBottom:20,
		marginBottom:20
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#e8f1f9',
		justifyContent: 'flex-end',
		borderBottomWidth: 5,
		borderBottomColor: '#2d6886',
	},
	headerStyle: {
		fontSize: 28,
		marginVertical: 10,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
		marginHorizontal: 10,
	},
	fillRequired: {
		backgroundColor: '#ffccbc',
		color: '#263238',
		flex: 1,
	},
	sameRow: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
	},
	sameRow1: {
		flexDirection: 'row-reverse',
		marginRight: 55,
	},
	note: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: '#263238',
	},
	designSquare: {
		flexDirection: 'column',

		borderBottomWidth: 3,
		borderBottomColor: '#d9e3f0',
	},
	input: {
		marginVertical: 15,
		marginHorizontal: 10,
		fontSize: 22,
		color: 'black',
		flex: 1,
	},
	hour: {
		marginHorizontal: 10,
		fontSize: 22,
		color: 'black',
		flex: 1,
	},
	hours: {
		flexDirection: 'row',
		borderBottomWidth: 3,
		borderBottomColor: '#d9e3f0',
		paddingBottom: 10,
	},
	meetDesign: {
		marginVertical: 2,
		flexDirection: 'row',
		fontWeight: 'bold',
		fontSize: 20,
		flex: 1,
	},
	image: {
		marginVertical: 50,
		height: 100,
		width: 150,
		borderRadius: 10,
		alignSelf: 'center',
	},
	multiSelect: {
		flex: 0.6,
		marginVertical: 10,
		marginLeft: 10,
		backgroundColor: '#c3dadd',
		borderWidth: 1,
		borderColor: 'white',
		paddingTop: 5,
		borderRadius: 5,
	},
});

export default MeetingForm;
