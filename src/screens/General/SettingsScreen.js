import React, { useState } from 'react';
import { View, Text, StyleSheet, CheckBox, Image } from 'react-native';
import { Button } from 'react-native-elements';
import FormInput from '../../components/genericComponents/FormInput';
import FormPickerSelect from '../../components/genericComponents/FormPickerSelect';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';
import Alert from '../../components/genericComponents/Alert';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SettingsScreen = ({ navigation, deleteProject, projects }) => {
	const [showAlert, setShowAlert] = useState(false);
	const [checked, setChecked] = useState(checked);
	const [edit, setEdit] = useState('');
	const rankItems = [1, 2, 3, 4, 5].map((num) => {
		const label = num === 1 ? `       ${num} Star` : `       ${num} Stars`;
		return { label: label, value: num, color: '#192C4D' };
	});
	const reminderItems = [48, 24, 12, 3, 1, 'No Reminder'].map((rem) => {
		const label = rem === 1 ? `       ${rem} Hour` : `       ${rem} Hours`;
		const color = rem === 'No Reminder' ? 'red' : '#192C4D';
		return { label: label, value: rem, color: color };
	});

	const onSignOutSucces = () => {
		navigation.navigate('LogIn');
		projects.map((project) => {
			deleteProject(project);
			console.log(project.name + 'deleted');
		});
	};

	const signOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				onSignOutSucces();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<View style={styles.container}>
			<Text style={styles.subHeader}> Edit Profile </Text>
			<FormInput title=" Edit Profile Name" value={edit} onChange={setEdit} viewStyle={styles.Pname} />
			<View style={styles.changePic}>
				<Image source={require('../../../assets/images/pp.png')} style={styles.imagePP} />
				<Text style={styles.task}>Change Profile Picture </Text>
			</View>
			<Text style={styles.subHeader}> Notifications </Text>
			<View style={styles.Check}>
				<CheckBox title="Email" checked={setChecked} style={styles.CheckBox1} value={true} />
				<Text style={styles.notification}>Email </Text>
			</View>
			<View style={styles.Check}>
				<CheckBox title="Mobile" checked={setChecked} style={styles.CheckBox2} value={true} />
				<Text style={styles.notification}>Mobile </Text>
			</View>
			<Text style={styles.subHeader}> Reminder </Text>
			<FormPickerSelect items={reminderItems} label={'Reminder'} />
			<Text style={styles.subHeader}> Rank our app </Text>
			<FormPickerSelect items={rankItems} label={'Rank'} />
			<Button title="Sign Out" onPress={() => setShowAlert(true)} />
			<Alert
				showAlert={showAlert}
				message="Are you sure you want to sign out?"
				onCancel={() => {
					() => setShowAlert(false);
				}}
				onConfirm={() => {
					signOut();
					() => setShowAlert(false);
				}}
			/>
		</View>
	);
};

SettingsScreen.navigationOptions = () => {
	return {
		headerRight: (
			<View>
				<Text style={styles.headerStyle}> Settings </Text>
			</View>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#607d8b',
		flex: 1,
	},
	changePic: {
		flexDirection: 'row',
		alignSelf: 'flex-end',
	},
	subHeader: {
		marginVertical: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		fontWeight: 'bold',
		fontSize: 22,
		color: '#152d48',
		borderBottomWidth: 3,
		borderBottomColor: '#d9e3f0',
	},
	task: {
		marginVertical: 10,
		fontSize: 20,
		marginHorizontal: 15,
		color: 'white',
	},
	notification: {
		marginVertical: 10,
		fontSize: 20,
		marginHorizontal: 15,
		color: 'white',
		alignSelf: 'center',
	},
	Check: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	CheckBox1: {
		backgroundColor: 'white',
		marginVertical: 10,
		marginHorizontal: 21,
		fontSize: 20,
		justifyContent: 'flex-start',
	},
	CheckBox2: {
		backgroundColor: 'white',
		marginVertical: 10,
		marginHorizontal: 10,
		fontSize: 20,
		justifyContent: 'flex-start',
	},
	Pname: {
		flexDirection: 'row',
		marginBottom: 10,
		fontSize: 16,
	},
	imagePP: {
		height: 60,
		width: 60,
	},
	imageS: {
		height: 60,
		width: 150,
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginRight: 5,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
});

const mapStateToProps = (state) => {
	return { projects: state.projects };
};

export default connect(mapStateToProps, actions)(withNavigation(SettingsScreen));
