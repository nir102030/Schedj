import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

//Show the user a pop up to allow the notifications and if he allows it store the token in the user db
export const registerForPushNotifications = async () => {
	// Check for existing permissions
	const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
	let finalStatus = status;

	// If no existing permission, ask user for permission
	if (status !== 'granted') {
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		finalStatus = status;
	}

	// If no permission, exit the function
	if (finalStatus !== 'granted') {
		return;
	}

	//Get push notification token
	let token = await Notifications.getExpoPushTokenAsync();
	console.log(token);

	//Add token to firebase
	let uid = firebase.auth().currentUser.uid;
	console.log(uid);
	firebase.database.ref('users').child(uid).update({
		expoPushToken: token,
	});
};
