import React from 'react';
import { View, ActivityIndicator, StyleSheet,Image } from 'react-native';

const SpinnerCalendar = ({ size }) => {


	return (
		<View style={styles.spinner}>
			<Image source={require('../../../assets/images/animat-calendar-color1.gif')} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		height: 100,
		width: 100,
		alignSelf: 'center',
	},
});

export default SpinnerCalendar;
