import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { addTopicToDb } from '../../firebase/topicsAPI';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import DialogInput from '../../../node_modules/react-native-dialog-input';

const CreateTopic = ({ addTopic, project }) => {
	const [showDialog, setShowDialog] = useState(false);

	const addNewTopic = (input) => {
		const topic = { pid: project.id, name: input };
		if (topic.name != '') {
			addTopic(topic);
			addTopicToDb(topic);
			setShowDialog(false);
		} else {
			alert('Please Enter Topic Name');
		}
	};

	return (
		<View>
			<DialogInput
				isDialogVisible={showDialog}
				title={'Topic Name             '}
				hintInput={'write your new topic here!'}
				submitInput={(input) => addNewTopic(input)}
				closeDialog={() => {
					setShowDialog(false);
				}}
			/>
			<TouchableOpacity style={styles.TouchableOpacity} onPress={() => setShowDialog(true)}>
				<Image source={require('../../../assets/images/addTask.png')} style={styles.image} />
				<Text style={styles.text}> Add a New Topic</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 37,
		width: 37,
		marginRight: 15,
		alignSelf: 'center',
	},
	text: {
		fontSize: 20,
		color: 'black',
		alignSelf: 'center',
		fontWeight: 'bold',
		marginVertical: 12,
	},
	TouchableOpacity: {
		backgroundColor: '#bbdde1',
		flexDirection: 'row-reverse',
	},
});

export default connect(null, actions)(CreateTopic);
