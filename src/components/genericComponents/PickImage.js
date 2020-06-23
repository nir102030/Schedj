import React, { useState, useEffect } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function ImagePickerExample({ currentImage, submit }) {
	const [image, setImage] = useState(currentImage.uri ? currentImage.uri : null);

	useEffect(() => {
		(async () => {
			if (Constants.platform.ios) {
				const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
				if (status !== 'granted') {
					alert('Sorry, we need camera roll permissions to make this work!');
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [3, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
			submit(image);
		}
	};

	return (
		<View style={{ alignItems: 'center', flexDirection: 'row-reverse', marginLeft: 18 }}>
			<Button title="Pick Profile Picture" onPress={pickImage} color={'#c3dadd'} />
			{image && (
				<Image
					source={{ uri: image }}
					style={{ width: 100, height: 100, borderRadius: 10, marginVertical: 10, marginHorizontal: 60 }}
				/>
			)}
		</View>
	);
}
