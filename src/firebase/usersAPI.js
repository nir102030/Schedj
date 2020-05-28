import firebase from 'firebase';

export const getAllUsersFromDb = (addUser) => {
	const ref = firebase.database().ref('users/');
	ref.once('value', (snapshot) => {
		snapshot.forEach((childSnapShot) => {
			addUser(childSnapShot.val());
		});
	});
};

export const addUserToDb = (user) => {
	firebase
		.database()
		.ref('users/' + user.uid)
		.set({
			email: user.email,
			token: '',
			profileName: '',
			profilePic: '',
			reminder: '',
			rank: '',
		});
};

export const editUserInDb = (user, token) => {
	const uid = user.uid;
	const dbUser = { ...user, token: token };
	var updates = {};
	updates['users/' + uid] = dbUser;
	firebase.database().ref().update(updates);
};
