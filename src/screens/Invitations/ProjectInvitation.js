import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ProjectInvitation = ({ navigation, pid, Owner, Inviter, List }) => {
	const project = navigation.getParam('project');
	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.Hello}>Hello {Owner} </Text>
				<Text style={styles.Text}>You got a new invitation for : </Text>
				<Text style={styles.projName}>{project.name} Project</Text>
				<Text style={styles.Text}>Rest of the team includes : {List}</Text>
				<Text style={styles.Text}>Would you like to approve the invitation ? </Text>
				<TouchableOpacity style={styles.TouchableOpacity}>
					<Image source={require('../../../assets/images/v.png')} style={styles.image} onPress={() => {}} />
					<Text style={styles.answer}>Yes, I'm willing to share my diary</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacity}>
					<Image
						source={require('../../../assets/images/calendar_icon.png')}
						style={styles.image}
						onPress={() => {}}
					/>
					<Text style={styles.answer}>I would like to change my schedule before</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacity}>
					<Image source={require('../../../assets/images/x.png')} style={styles.image} onPress={() => {}} />
					<Text style={styles.answer}>No, Reject the invitation</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#607d8b',
		height: '100%',
	},
	Hello: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 10,
		color: 'white',
		textAlign: 'right',
	},
	Text: {
		fontWeight: 'bold',
		fontSize: 23,
		marginVertical: 10,
		color: 'white',
		paddingLeft: 10,
		flex: 1,
	},
	projName: {
		fontWeight: 'bold',
		fontSize: 35,
		marginVertical: 10,
		paddingLeft: 10,
		color: '#40b1bf',
		backgroundColor: '#375360',
		flex: 1,
	},
	TouchableOpacity: {
		flex: 1,
		flexDirection: 'row-reverse',
		borderBottomWidth: 3,
		borderBottomColor: 'white',
	},
	image: {
		height: 30,
		width: 30,
		marginRight: 15,
		alignSelf: 'center',
	},
	answer: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 20,
		marginHorizontal: 10,
		color: '#0F3A3E',
		alignSelf: 'center',
	},
});

export default withNavigation(ProjectInvitation);
