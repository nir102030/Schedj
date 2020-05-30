import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { editUserInDb } from '../firebase/usersAPI';
import { Platform, Vibration } from 'react-native';

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

	if (Platform.OS === 'android') {
		Notifications.createChannelAndroidAsync('default', {
			name: 'default',
			sound: true,
			priority: 'max',
			vibrate: [0, 250, 250, 250],
		});
	}
};

export const sendPushNotification = async (user, msgTitle, msgBody, project) => {
	const token = user.token;
	const message = {
		to: token,
		sound: 'default',
		title: msgTitle,
		body: msgBody,
		data: { data: project },
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
