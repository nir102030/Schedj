import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';
import Spacer from '../../components/genericComponents/Spacer';

const ProjectInvitation = ({ navigation, pid, Owner, Inviter }) => {
	const project = navigation.getParam('project');
	const currentUser = firebase.auth().currentUser;
	return (
		<View style={styles.container}>
			<ScrollView>
				<Text style={styles.Hello}>Hello  {currentUser.email}</Text>
				<Text style={styles.Text}>You got a new invitation for:</Text>
				<Spacer/>
				<Text style={styles.Text1}>{project.name} project</Text>
				{/* <Spacer/>
				<Text style={styles.Text2}>Rest of the team includes : </Text>
				<Spacer/> */}
				{/* <Text style={styles.Text4}>Put Participants</Text> */}
				<Spacer/>
				<Text style={styles.Text}>Would you like to approve the invitation ? </Text>
				<TouchableOpacity style={styles.TouchableOpacity}>
					<Image source={require('../../../assets/images/v.png')} style={styles.image} onPress={() => {}} />
					<Text style={styles.answer}>Yes, I'm willing to share my schedule</Text>
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
        backgroundColor:'#e8f1f9',
		height: '100%',
	},
	Hello: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 10,
		color: '#263238',
		textAlign: 'right',
	},
	Text: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
		color: '#263238',
		paddingLeft: 10,
		flex: 1,
	},
	Text1: {
		fontWeight: 'bold',
		fontSize: 23,
		marginVertical: 10,
		color: '#3a8992',
		paddingLeft: 10,
		flex: 1,
		alignSelf: 'center',
		fontSize:25,
	},
	Text2: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
		color: '#263238',
		paddingLeft: 10,
		flex: 1,
	},
	Text4:{
		paddingBottom:140
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
		backgroundColor:'#a1cfd5',
	},
	image: {
		height: 25,
		width: 25,
		marginRight: 15,
		alignSelf: 'center',
	},
	answer: {
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 20,
		marginHorizontal: 10,
		color: 'white',
		alignSelf: 'center',
	},
});

export default withNavigation(ProjectInvitation);
