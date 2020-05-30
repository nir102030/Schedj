import React,{useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Alert from '../genericComponents/Alert';
import FormSectionedMultiSelect from '../genericComponents/FormSectionedMultiSelect';
import { deleteMeetingFromDb } from '../../firebase/meetingsAPI';

const MeetingComp = ({ project, tasks, topics, navigation, meeting, deleteMeeting, editTask }) => {
	const taskList = tasks.filter((task) => task.pid === meeting.pid);
	const topicsList = topics.filter((topic) => topic.pid === meeting.pid);
	const [showAlert, setShowAlert] = useState(false);


	const taskChoices = topicsList.map((topic) => {
		const children = taskList
			.filter((task) => task.topic === topic.name)
			.map((task) => {
				return { name: task.name, id: task.tid };
			});
		return { name: topic.name, id: topic.name, children: children };
	});

	const addTasksToMeeting = (selectedItems) => {
		selectedItems.map((selectedItem) => {
			const task = taskList.find((task) => task.tid === selectedItem);
			const editedTask = { ...task, mid: meeting.mid };
			editTask(editedTask);
		});
	};

	// const onDeletePress = () => {
	// 	deleteMeeting(meeting);
	// 	deleteMeetingFromDb(meeting);
	// };

	return (
		<View style={styles.container}>
			<View style={{ flex: 6, flexDirection: 'row' }}>
				<TouchableOpacity style={styles.button} onPress={() => setShowAlert(true)}>
					<Image source={require('../../../assets/images/delete.png')} style={styles.image} />
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate('EditM', { meeting, project })}
				>
					<Image source={require('../../../assets/images/edit_logo.png')} style={styles.image} />
				</TouchableOpacity>
				<View style={{ flex: 6 }}>
					<View style={{ flexDirection: 'row-reverse' }}>
						<Text style={styles.header}>Meeting {meeting.mid + 1}</Text>
						<Text style={styles.date}>{meeting.date}</Text>
					</View>
				</View>
			</View>
			<View style={styles.multiSelect}>
				<FormSectionedMultiSelect taskChoices={taskChoices} addTasksToMeeting={addTasksToMeeting} />
			</View>
			<Alert
				showAlert={showAlert}
				message="Are you sure you want to delete this meeting?"
				onCancel={() => setShowAlert(false)}
				onConfirm={() => {
					deleteMeeting(meeting);
					deleteMeetingFromDb(meeting);
					() => setShowAlert(false);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical:5,
		backgroundColor:'#53a6af',
        borderRadius:10,
        paddingRight:3,
		flexDirection: 'column',
		marginHorizontal: 10,
	},
	header: {
		marginVertical: 5,
		marginHorizontal: 10,
		height: 32,
		fontWeight: 'bold',
		fontSize: 24,
		color: 'white',
		flex: 1,
		flexDirection: 'row-reverse',
	},
	date: {
		marginVertical: 10,
		marginHorizontal: 12,
		height: 30,
		fontWeight: 'bold',
		fontSize: 18,
		color: 'white',
		flex: 1,
		flexDirection: 'row-reverse',
	},
	TouchableOpacity: {
		backgroundColor: '#91a5af',
		flex: 1,
		flexDirection: 'row-reverse',
		alignSelf: 'center',
	},
	imageAdd: {
		height: 35,
		width: 35,
		marginRight: 15,
		alignSelf: 'center',
	},
	addTask: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
		alignSelf: 'center',
	},
	image: {
		height: 35,
		width: 35,
		marginHorizontal: 5,
	},
	button: {
		alignSelf: 'baseline',
		flex: 1,
		marginTop: 5,
	},
	multiSelect: {
		marginHorizontal: 0,
	},
});

const mapStateToProps = (state) => {
	return { tasks: state.tasks, topics: state.topics };
};

export default connect(mapStateToProps, actions)(withNavigation(MeetingComp));
