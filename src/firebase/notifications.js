import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { addUserToDbAsync } from '../firebase/usersAPI';
import { Platform, Vibration } from 'react-native';

//Show the user a pop up to allow the notifications and if he allows it store the token in the user db
export const registerForPushNotifications = async (user) => {
	if (Platform.OS === 'android') {
		await Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			sound: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
		});
	}

	// Check for existing permissions
	const { status } = await Notifications.getPermissionsAsync();
	let finalStatus = status;

	// If no existing permission, ask user for permission
	if (status !== 'granted') {
		const { status } = await Notifications.requestPermissionsAsync();
		finalStatus = status;
	}

	// If no permission, exit the function
	if (finalStatus !== 'granted') {
		return;
	}

	//Get push notification token
	const projectId = Constants.expoConfig?.extra?.eas?.projectId;
	let { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });

	//Add token to firebase
	addUserToDbAsync(user, token);
};

export const sendPushNotification = async (user, msgTitle, msgBody, data) => {
	const token = user.token;
	const message = {
		to: token,
		sound: 'default',
		title: msgTitle,
		body: msgBody,
		data: data,
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
