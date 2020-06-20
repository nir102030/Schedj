import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import MeetingList from '../../components/meetingsComponents/MeetingsList';

const MeetingsScreen = ({ navigation }) => {
	const project = navigation.getParam('project');

	return (
		<View style={styles.container}>
			<MeetingList project={project} style={styles.list} />
			<TouchableOpacity
				style={styles.TouchableOpacity}
				onPress={() => navigation.navigate('CreateM', { project })}
			>
				<Image source={require('../../../assets/images/add.png')} style={styles.image} />
				<Text style={styles.text}> Add a New Meeting</Text>
			</TouchableOpacity>
		</View>
	);
};

MeetingsScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<View style={styles.navigator}>
				<Text style={styles.headerStyle}> Meetings </Text>
				<TouchableOpacity onPress={() => navigation.navigate('Projects')}>
					<Image source={require('../../../assets/images/home.png')} style={styles.home} />
				</TouchableOpacity>
			</View>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
	},
	list: {
		flex: 9,
		backgroundColor: '#e8f1f9',
	},
	TouchableOpacity: {
		backgroundColor: '#bbdde1',
		flex: 1,
		flexDirection: 'row-reverse',
	},
	image: {
		height: 37,
		width: 37,
		marginRight: 15,
		alignSelf: 'center',
	},
	text: {
		fontSize: 20,
		color: '#263238',
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	home: {
		height: 35,
		width: 35,
		marginRight: 10,
	},
	navigator: {
		flexDirection: 'row',
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginRight: 5,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
});

export default MeetingsScreen;
