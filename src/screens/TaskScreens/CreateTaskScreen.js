import React from 'react';
import TaskForm from '../../components/tasksComponents/TaskForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { addTaskToDb } from '../../firebase/tasksAPI';

const CreateTaskScreen = ({ navigation, addTask }) => {
	const topic = navigation.getParam('topic');

	const task = {
		pid: topic.pid,
		topic: topic.name,
		mid: 0,
		tid: Math.floor(Math.random() * 99999),
		name: '',
		description: '',
		status: 0.3,
		color: 'red',
	};

	const onSubmit = (task) => {
		addTask(task);
		addTaskToDb(task);
		navigation.pop();
	};

	return <TaskForm oldTask={task} onSubmit={(task) => onSubmit(task)} type="create" />;
};

export default connect(null, actions)(CreateTaskScreen);
