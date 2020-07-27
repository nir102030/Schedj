import firebase from 'firebase';

export const getAllUsersFromDb = async (addUser) => {
	const ref = firebase.database().ref('users/');
	ref.on('value', (snapshot) => {
		snapshot.forEach((childSnapShot) => {
			addUser(childSnapShot.val());
		});
	});
	return true;
};

export const getUserFromDb = (user) => {
	const ref = firebase.database().ref('users/' + user.uid);
	ref.once('value', (snapshot) => {
		return snapshot.val();
	});
};

export const addUserToDbAsync = async (user, token) => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(addUserToDb(user, token), 1000));
	});
	let result = await promise;
};

export const addUserToDb = (user, token) => {
	firebase
		.database()
		.ref('users/' + user.uid)
		.set({
			uid: user.uid,
			email: user.email,
			profileName: user.email,
			profilePic: user.profilePic,
			reminder: user.reminder,
			rank: user.rank,
			calendar: user.calendar,
			emailNotification: user.emailNotification,
			mobileNotification: user.mobileNotification,
			token: token,
		});
};

export const editUserInDbAsync = async (user) => {
	console.log('edit is working');
	const dbUser = getUserFromDb(user);
	const editedDbUser = { ...dbUser, isNewUser: isNewUser };
	var updates = {};
	updates['users/' + uid] = editedDbUser;
	firebase.database().ref().update(updates);
};

export const editUserInDb = (user) => {
	var updates = {};
	updates['users/' + user.uid] = user;
	firebase.database().ref().update(updates);
};
