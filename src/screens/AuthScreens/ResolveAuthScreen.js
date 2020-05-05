import firebase from 'firebase';
import { firebaseInit } from '../../firebase/config';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ResolveAuthScreen = ({ navigation, getAllProjectsFromDb }) => {
	firebaseInit();
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
