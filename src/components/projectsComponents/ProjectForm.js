import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import FormInput from '../genericComponents/FormInput';
import FormSubmitButton from '../genericComponents/FormSubmitButton';
import FormNotes from '../../components/genericComponents/FormNotes';
import FormMultiSelect from '../genericComponents/FormMultiSelect';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import Spacer from '../genericComponents/Spacer';
import firebase from 'firebase';

const ProjectForm = ({ oldProject, onSubmit, type, users }) => {
	const [project, setProject] = useState(oldProject);
	const currentUser = firebase.auth().currentUser;
	const participantsList = users.filter((user) => user.uid !== currentUser.uid);
	const validation = () => {
		if (project.name == '') {
			alert('Please Enter Project Name');
		} else if (project.participants.length == 0) {
			alert('You must add at least one participant!');
		} else if (type == 'create') {
			alert('New Project has been Created');
			onSubmit(project);
		} else {
			alert(`${project.name} was edited`);
			onSubmit(project);
		}
	};

	const getParticipantsStatus = (participants, oldParticipants) => {
		return participants.map((participant) => {
			if (type == 'create') {
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
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text}>{project.name}</Text>
			</View>
			<ScrollView>
				<Text style={styles.fillRequired}> Please fill the required fields </Text>
				<FormInput
					title=" Project Name"
					value={project.name}
					onChange={(name) => setProject({ ...project, name: name })}
					viewStyle={styles.projectName}
				/>
				<Spacer />
				<FormMultiSelect
					list={participantsList.map((participant) => {
						return { id: participant.email, name: participant.email };
					})}
					addItemsToList={(participants) => {
						const oldParticipants = project.participants;
						const participantsStatus = getParticipantsStatus(participants, oldParticipants);
						setProject({
							...project,
							participants: [...participants, currentUser.email],
							participantsStatus: [
								...participantsStatus,
								{ participant: currentUser.email, status: true },
							],
						});
					}}
					type="Participants"
					selectedItems={project.participants.filter((participant) => participant !== currentUser.email)}
				/>
				<Spacer />
				<FormInput
					title=" Min Participants For Meeting"
					value={project.minForMeeting}
					onChange={(minForMeeting) => setProject({ ...project, minForMeeting: minForMeeting })}
					viewStyle={styles.minMeet}
				/>
				<Spacer />
				<Text style={styles.note}> Write your notes here! </Text>
				<FormNotes
					title=" "
					notes={project.notes}
					setNotes={(notes) => setProject({ ...project, notes: notes })}
				/>
				<Text style={styles.task}> *Define your tasks later </Text>
				<FormSubmitButton onSubmit={() => validation()} type={type} />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8f1f9',
		height: '100%',
	},
	header: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderBottomWidth: 5,
		borderBottomColor: '#2d6886',
		backgroundColor: '#e8f1f9',
		justifyContent: 'flex-end',
	},
	text: {
		//fontWeight: 'bold',
		fontSize: 28,
		marginVertical: 10,
		marginHorizontal: 34,
		alignSelf: 'center',
		color: '#263238',
		flex: 4,
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginRight: 5,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
	fillRequired: {
		backgroundColor: '#ffccbc',
		flex: 1,
	},
	projectName: {
		flexDirection: 'row',
	},
	minMeet: {
		flexDirection: 'row',
	},
	note: {
		marginVertical: 10,
		alignSelf: 'center',
		fontWeight: 'bold',
		color: 'black',
	},
	notes: {
		flexDirection: 'row',
	},
	task: {
		marginTop: 20,
		fontWeight: 'bold',
		color: 'black',
	},
});

const mapStateToProps = (state) => {
	return { users: state.users };
};
export default connect(mapStateToProps, actions)(ProjectForm);
