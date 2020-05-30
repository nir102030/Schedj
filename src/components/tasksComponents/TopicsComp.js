import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';
import TaskList from './TaskList';
import Alert from '../../components/genericComponents/Alert';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const TopicsComp = ({ navigation, project, topic, editTopic, deleteTopic }) => {
	const [newTopic, setNewTopic] = useState(topic);
	const [showAlert, setShowAlert] = useState(false);

	const setTopic = (name) => {
		setNewTopic({ ...newTopic, name: name });
		editTopic(newTopic);
	};

	return (
		<View style={styles.container}>
			<View style={styles.topic}>
				<TextInput
					style={styles.subHeader}
					placeholder={newTopic.name}
					value={newTopic.name}
					onChangeText={(name) => setTopic(name)}
				/>
				<TouchableOpacity
					style={styles.TouchableOpacity}
					onPress={() => navigation.navigate('CreateT', { topic })}
				>
					<Image source={require('../../../assets/images/add.png')} style={styles.image1} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacity} onPress={() => setShowAlert(true)}>
					<Image source={require('../../../assets/images/delete.png')} style={styles.image} />
				</TouchableOpacity>
			</View>
			<TaskList project={project} topic={topic} style={styles.list} />
			<Alert
				showAlert={showAlert}
				message="Are you sure you want to delete this topic?"
				onCancel={() => setShowAlert(false)}
				onConfirm={() => {
					deleteTopic(topic);
					() => setShowAlert(false);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#53a6af',
        borderRadius:10,
        //paddingRight:30,
		justifyContent: 'space-between',
		paddingBottom: 20,
		paddingRight:4,
		paddingLeft:4
	},
	list: {
		flex: 9,
	},
	topic: {
		flexDirection: 'row-reverse',
	
	},
	subHeader: {
		fontSize: 22,
		color: '#152d48',
		flex: 4,
		marginVertical: 10,
		marginHorizontal: 5,
		fontWeight: 'bold',
	},
	TouchableOpacity: {
		flexDirection: 'row-reverse',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingRight:3
	},
	image: {
		height: 25,
		width: 25,
		marginRight: 7,
	},
	image1: {
		height: 30,
		width: 30,
		marginRight: 7,
	},
});

export default connect(null, actions)(withNavigation(TopicsComp));
