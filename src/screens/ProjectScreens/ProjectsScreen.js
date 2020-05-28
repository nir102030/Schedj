import React, { useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import ProjectsList from '../../components/projectsComponents/ProjectsList';

import { connect } from 'react-redux';
import firebase from 'firebase';

const ProjectsScreen = ({ navigation }) => {
	const user = firebase.auth().currentUser;

	return (
		<View style={styles.container}>
			<Text h4>Hello {user.email.substring(0, user.email.indexOf('@'))}</Text>
			<ProjectsList style={styles.list} />
			<View style={styles.straight}>
				<TouchableOpacity style={styles.TouchableOpacitySC} onPress={() => navigation.navigate('ComeSoon')}>
					<Image source={require('../../../assets/images/comingsoon.png')} style={styles.image} />
					<Text style={styles.text}>Coming Soon</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacityA} onPress={() => navigation.navigate('AboutUs')}>
					<Image source={require('../../../assets/images/AboutUsIcon.png')} style={styles.image} />
					<Text style={styles.text}>About Us</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacitySC} onPress={() => navigation.navigate('Settings')}>
					<Image source={require('../../../assets/images/settings.png')} style={styles.image} />
					<Text style={styles.text}>Settings</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacityA} onPress={() => navigation.navigate('CreateP')}>
					<Image source={require('../../../assets/images/add.png')} style={styles.image} />
					<Text style={styles.text}>Add Project</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

ProjectsScreen.navigationOptions = () => {
	return {
		headerRight: (
			<View>
				<Text style={styles.headerStyle}> Projects </Text>
			</View>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#607d8b',
	},
	straight: {
		flexDirection: 'row',
	},
	list: {
		flex: 9,
	},
	TouchableOpacityA: {
		backgroundColor: '#cfd8dc',
		flex: 2.5,
		flexDirection: 'column',
		borderBottomWidth: 0.6,
		borderBottomColor: 'white',
	},
	TouchableOpacitySC: {
		backgroundColor: '#90a4ae',
		flex: 2.5,
		flexDirection: 'column',
		borderBottomWidth: 0.6,
		borderBottomColor: 'white',
	},
	image: {
		height: 37,
		width: 37,
		alignSelf: 'center',
	},
	text: {
		fontSize: 14,
		color: 'black',
		fontWeight: 'bold',
		alignSelf: 'center',
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

const mapStateToProps = (state) => {
	return { projects: state.projects };
};
export default connect(mapStateToProps)(ProjectsScreen);
