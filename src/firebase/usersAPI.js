import { ref, onValue, get, set, update } from 'firebase/database';
import { getFirebaseDb } from './config';

export const getAllUsersFromDb = async (addUser) => {
	const usersRef = ref(getFirebaseDb(), 'users/');
	onValue(usersRef, (snapshot) => {
		snapshot.forEach((childSnapShot) => {
			addUser(childSnapShot.val());
		});
	});
	return true;
};

export const getUserFromDb = (user) => {
	const userRef = ref(getFirebaseDb(), 'users/' + user.uid);
	get(userRef).then((snapshot) => {
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
	set(ref(getFirebaseDb(), 'users/' + user.uid), {
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
	update(ref(getFirebaseDb()), updates);
};

export const editUserInDb = (user) => {
	var updates = {};
	updates['users/' + user.uid] = user;
	update(ref(getFirebaseDb()), updates);
};
