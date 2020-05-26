import firebase from 'firebase';

export const addUserToDb = (uid, email) => {
	firebase
		.database()
		.ref('users/' + uid)
		.set({
			email: email,
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
