import firebase from 'firebase';

export const getAllUsersFromDb = (addUser) => {
	const ref = firebase.database().ref('users/');
	ref.once('value', (snapshot) => {
		snapshot.forEach((childSnapShot) => {
			addUser(childSnapShot.val());
		});
	});
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
			token: token,
			profileName: '',
			profilePic: '',
			reminder: '',
			rank: '',
		});
};

export const editUserInDbAsync = async (user) => {
	console.log('edit is working');
	const dbUser = getUserFromDb(user);
	console.log(dbUser);
	const editedDbUser = { ...dbUser, isNewUser: isNewUser };
	console.log(editedDbUser);
	var updates = {};
	updates['users/' + uid] = editedDbUser;
	firebase.database().ref().update(updates);
};
