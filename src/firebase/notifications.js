import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { editUserInDb } from '../firebase/usersAPI';

//Show the user a pop up to allow the notifications and if he allows it store the token in the user db
export const registerForPushNotifications = async (user) => {
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

	//Add token to firebase
	editUserInDb(user, token);
};

export const sendPushNotification = async (user, title, body) => {
	const token = user.token;
	const message = {
		to: token,
		sound: 'true',
		title: title,
		body: body,
		data: { data: 'goes here' },
		_displayInForeground: true,
	};
	let response = fetch('https://exp.host/--/api/v2/push/send', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Accept-encoding': 'gzip, deflate',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(message),
	});
};
