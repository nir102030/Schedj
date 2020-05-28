import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { registerForPushNotifications } from '../../firebase/notifications';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';

const OpenScreen = ({ navigation, users }) => {
	const uid = firebase.auth().currentUser.uid;
	console.log(users);
	const user = users.find((user) => user.uid == uid);
	useEffect(() => {
		registerForPushNotifications(user);
	}, []);

	return (
		<View style={styles.container}>
			<Image source={require('../../../assets/images/schedjWhiteTry.png')} style={styles.whiteHeadr} />
			<View style={styles.container}>
				<Image source={require('../../../assets/images/gif.png')} style={styles.backgroundimage} />
				<Image source={require('../../../assets/images/smallHeader.png')} style={styles.smallHeader} />
				<TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Projects')}>
					<Animatable.Text
						animation="pulse"
						easing="ease-out"
						iterationCount="infinite"
						style={{ textAlign: 'center' }}
					>
						<Image source={require('../../../assets/images/goSchedjTry.png')} style={styles.image} />
					</Animatable.Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

OpenScreen.navigationOptions = () => {
	return {
		headerRight: (
			<View>
				<Text style={styles.headerStyle}> Schedj </Text>
			</View>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#3b687d',
	},
	TouchableOpacity: {
		flexDirection: 'row-reverse',
		flex: 1,
		alignSelf: 'center',
		marginBottom: 80,
	},
	backgroundimage: {
		height: 700,
		width: 420,
		flex: 1,
		alignSelf: 'center',
	},
	smallHeader: {
		height: 150,
		width: 430,
		alignSelf: 'center',
	},
	image: {
		height: 120,
		width: 200,
		marginBottom: 20,
	},
	whiteHeadr: {
		height: 120,
		width: 350,
		alignSelf: 'center',
		marginVertical: 15,
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
	return { users: state.users };
};

export default connect(mapStateToProps, actions)(OpenScreen);
