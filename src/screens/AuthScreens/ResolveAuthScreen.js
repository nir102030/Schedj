import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseInit, getFirebaseAuth } from '../../firebase/config';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ResolveAuthScreen = ({ navigation }) => {
	useEffect(() => {
		firebaseInit();
		const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => {
			if (user) {
				navigation.navigate('OpenS');
			} else {
				console.log('user is not signed in');
				navigation.navigate('SignUp');
			}
		});
		return unsubscribe;
	}, []);
	return null;
};

export default connect(null, actions)(ResolveAuthScreen);
