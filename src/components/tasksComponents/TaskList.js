import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import TaskComp from './TaskComp';
import { getAllTasksFromDb } from '../../firebase/tasksAPI';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const TaskList = ({ tasks, topic, style, addTask }) => {
	useEffect(() => {
		getAllTasksFromDb(topic, tasks, addTask);
	}, []);

	const taskList = tasks.filter((task) => task.pid == topic.pid && task.topic == topic.name);

	function Item({ item }) {
		return (
			<View style={styles.item}>
				<TaskComp task={item} />
			</View>
		);
	}
	return (
		<View style={style}>
			<ScrollView>
				<FlatList
					data={taskList}
					keyExtractor={(task) => task.tid}
					renderItem={({ item }) => <Item item={item} />}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		marginVertical: 10,
	},
});

const mapStateToProps = (state) => {
	return { tasks: state.tasks };
};

export default connect(mapStateToProps, actions)(TaskList);
