import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, FlatList } from 'react-native';
import FormInput from '../genericComponents/FormInput';
import FormParticipantsList from '../genericComponents/FormParticipantsList';
import FormSubmitButton from '../genericComponents/FormSubmitButton';
import FormNotes from '../../components/genericComponents/FormNotes';

const ProjectForm = ({ oldProject, onSubmit, type }) => {
	const [project, setProject] = useState(oldProject);
	const validation = () => {
		if (project.name == '') {
			alert('Please Enter Project Name');
		} else if (project.participants.length == 0) {
			alert('It has to be at least one participant!');
		} else if (type == 'create') {
			alert('New Project has been Created');
			onSubmit(project);
		} else {
			alert(`${project.name} was edited`);
			onSubmit(project);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text}>{project.name}</Text>
			</View>
			<ScrollView>
				<Text style={styles.fillRequired}>Please fill the required fields </Text>
				<FormInput
					title="Project Name"
					value={project.name}
					onChange={(name) => setProject({ ...project, name: name })}
					viewStyle={styles.projectName}
				/>
				<FormParticipantsList
					participants={project.participants}
					setParticipant={(participants) => setProject({ ...project, participants: participants })}
				/>
				<FormInput
					title="Min Participants For Meeting"
					value={project.minForMeeting}
					onChange={(minForMeeting) => setProject({ ...project, minForMeeting: minForMeeting })}
					viewStyle={styles.minMeet}
				/>
				<Text style={styles.note}> Write your notes here! </Text>
				<FormNotes notes={project.notes} setNotes={(notes) => setProject({ ...project, notes: notes })} />
				<Text style={styles.task}> *Define your tasks later </Text>
				<FormSubmitButton onSubmit={() => validation()} type={type} />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#607d8b',
		height: '100%',
	},
	header: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderBottomWidth: 5,
		borderBottomColor: '#2d6886',
		backgroundColor: '#8aa9b9',
		justifyContent: 'flex-end',
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
	fillRequired: {
		backgroundColor: 'red',
		flex: 1,
	},
	projectName: {
		flexDirection: 'row',
		borderBottomWidth: 3,
		borderBottomColor: '#d9e3f0',
	},
	minMeet: {
		flexDirection: 'row',
		borderBottomWidth: 3,
		borderBottomColor: '#d9e3f0',
		marginBottom: 10,
	},
	note: {
		alignSelf: 'center',
		fontWeight: 'bold',
		color: 'white',
	},
	notes: {
		flexDirection: 'row',
	},
	task: {
		marginTop: 20,
		fontWeight: 'bold',
		color: 'white',
	},
});

export default ProjectForm;
