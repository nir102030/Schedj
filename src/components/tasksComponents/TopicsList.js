import React from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import TopicsComp from './TopicsComp';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const TopicsList = ({ topics, project, style }) => {
	const topicsList = topics.filter((topic) => topic.pid == project.id);

	function Item({ item }) {
		return (
			<View style={styles.item}>
				<TopicsComp project={project} topic={item} />
			</View>
		);
	}
	return (
		<View style={style}>
			<ScrollView>
				<FlatList
					data={topicsList}
					keyExtractor={(topic) => topic.name}
					renderItem={({ item }) => <Item item={item} />}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 3,
		marginVertical: 10,
	},
});

const mapStateToProps = (state) => {
	return { topics: state.topics };
};

export default connect(mapStateToProps, actions)(TopicsList);
