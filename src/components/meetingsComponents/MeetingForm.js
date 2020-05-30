import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormDatePicker from '../../components/genericComponents/FormDatePicker';
import FormInput from '../../components/genericComponents/FormInput';
import FormHour from '../../components/genericComponents/FormHour';
import TimePicker from 'react-native-24h-timepicker';
import FormNewDatePicker from '../genericComponents/FormNewDatePicker';
import FormSubmitButton from '../genericComponents/FormSubmitButton';
import FormNotes from '../genericComponents/FormNotes';
import FormMultiSelect from '../genericComponents/FormMultiSelect';
import Spacer from '../genericComponents/Spacer';

const MeetingForm = ({ project, oldMeeting, onSubmit, type }) => {
	const [meeting, setMeeting] = useState(oldMeeting);
	console.log(meeting.date);

	const validation = () => {
		if (meeting.participants.length == 0) {
			alert('You must add at least one participant!');
		} else {
			onSubmit(meeting);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerStyle}>Meeting {meeting.mid + 1}</Text>
			</View>
			<ScrollView>
				<Text style={styles.fillRequired}>Please fill the required fields </Text>
				<View style={styles.designSquare}>
					<FormNewDatePicker date={meeting.date} setDate = {(date) => setMeeting({ ...meeting, date: date })}/>
				</View>
				<FormInput
					title=" Place Of Meeting"
					value={meeting.place}
					onChange={(place) => setMeeting({ ...meeting, place: place })}
					viewStyle={styles.designSquare}
				/>
				<FormMultiSelect
					style={styles.addPart}
					list={project.participants.map((participant) => {
						return { id: participant, name: participant };
					})}
					addItemsToList={(participants) => setMeeting({ ...meeting, participants: participants })}
					type="Participants"
				/>
				<Spacer/>
				<Text style={styles.note}> Write your notes here! </Text>
				<FormNotes notes={meeting.notes} setNotes={(notes) => setMeeting({ ...meeting, notes: notes })} />
				<FormSubmitButton onSubmit={() => validation()} type={type} />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8f1f9',
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#e8f1f9',
		justifyContent: 'flex-end',
		borderBottomWidth: 5,
		borderBottomColor: '#2d6886',
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
		marginHorizontal: 10,
	},
	fillRequired: {
		backgroundColor: '#ffccbc',
		flex: 1,
	},
	note: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: 'black',
	},
	designSquare: {
		flexDirection: 'row',
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
});

export default MeetingForm;
