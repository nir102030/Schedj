import React from 'react';
import { View, ActivityIndicator, StyleSheet,Image } from 'react-native';

const SpinnerMeeting = ({ size }) => {


	return (
		<View style={styles.spinner}>
			<Image source={require('../../../assets/images/test.gif')} style={styles.image} />
            <Image source={require('../../../assets/images/test2.gif')} style={styles.image2} />
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
		height: 150,
        width: 150,
        borderRadius:10,
		alignSelf: 'center',
    },
    image2: {
		height: 150,
        width: 150,
        borderRadius:10,
		alignSelf: 'center',
	},
});

export default SpinnerMeeting;
