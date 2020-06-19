import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const FormNewDatePicker = ({ date, onConfirm, type, imageSrc, startIndex, endIndex }) => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		date.setTime(date.getTime() + 3 * 60 * 60 * 1000);
		const jsonDate = date.toJSON();
		hideDatePicker();
		onConfirm(jsonDate);
	};

	return (
		<View>
			<View style={styles.row}>
				<TouchableOpacity onPress={showDatePicker}>
					<Text style={styles.dateTime}>{date.toString().substring(startIndex, endIndex)}</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.TouchableOpacity} onPress={showDatePicker}>
					<Image source={imageSrc} style={styles.image} />
				</TouchableOpacity>
				<DateTimePickerModal
					isVisible={isDatePickerVisible}
					mode={type}
					onConfirm={(date) => handleConfirm(date)}
					onCancel={hideDatePicker}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	TouchableOpacity: {
		backgroundColor: '#e8f1f9',
		// marginRight: 20,
	},
	row: {
		flexDirection: 'row',
	},
	image: {
		height: 40,
		width: 40,
		marginVertical: 10,
		marginHorizontal: 20,
	},
	dateTime: {
		marginVertical: 10,
		fontSize: 15,
		marginRight: 5,
		marginLeft: 10,
		paddingBottom: 10,
		paddingTop: 10,
		paddingRight: 10,
		paddingLeft: 10,
		borderWidth: 1,
		borderColor: 'white',
		backgroundColor: '#c3dadd',
		borderRadius: 5,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
});

export default FormNewDatePicker;
