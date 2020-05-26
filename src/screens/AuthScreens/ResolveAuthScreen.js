import { useEffect } from 'react';
import firebase from 'firebase';
import { firebaseInit } from '../../firebase/config';
import { registerForPushNotifications } from '../../firebase/notifications';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ResolveAuthScreen = ({ navigation }) => {
	firebaseInit();
	useEffect(() => {
		registerForPushNotifications();
	}, []);
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			navigation.navigate('OpenS');
		} else {
			console.log('user is not signed in');
			navigation.navigate('SignUp');
		}
	});
	return null;
};

const mapStateToProps = (state) => {
	return { projects: state.projects };
};
export default connect(mapStateToProps, actions)(ResolveAuthScreen);
