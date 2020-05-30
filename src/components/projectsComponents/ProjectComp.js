import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';
import Swipeable from 'react-native-swipeable-row';
import Alert from '../genericComponents/Alert';
import { withNavigation } from 'react-navigation';
import { deleteProjectFromDb } from '../../firebase/projectsAPI';

const ProjectComp = ({ project, deleteProject, navigation }) => {
	const [showAlert, setShowAlert] = useState(false);

	const rightButtons = [
		<TouchableHighlight>
			<TouchableOpacity style={styles.TouchableOpacityLeftSide} onPress={() => setShowAlert(true)}>
				<Image source={require('../../../assets/images/delete.png')} style={styles.image} />
			</TouchableOpacity>
		</TouchableHighlight>,
	];

	const leftButtons = [
		<TouchableHighlight>
			<TouchableOpacity
				style={styles.TouchableOpacityRightSide}
				onPress={() => navigation.navigate('EditP', { project })}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Edit</Text>
			</TouchableOpacity>
		</TouchableHighlight>,
	];

	return (
		<View style={styles.general}>
			<Swipeable leftButtons={leftButtons} rightButtons={rightButtons}>
				<View style={styles.container}>
					<View style={{ flexDirection: 'column'}}>
						<Text style={styles.text}>{project.name}</Text>
						<View style={styles.options}>
							<IndexDetail
								imageSrc={require('../../../assets/images/taskTry.png')}
								navigationScreen="Tasks"
								project={project}
							/>
							<IndexDetail
								imageSrc={require('../../../assets/images/meetingTry.png')}
								navigationScreen="Meetings"
								project={project}
							/>
							<IndexDetail
								imageSrc={require('../../../assets/images/calendarTry.png')}
								navigationScreen="Calendar"
								project={project}
							/>
						</View>
					</View>
					<ProjectStatus />
				</View>
			</Swipeable>
			<Alert
				showAlert={showAlert}
				message="Are you sure you want to delete this project?"
				onCancel={() => setShowAlert(false)}
				onConfirm={() => {
					deleteProject(project);
					deleteProjectFromDb(project);
					() => setShowAlert(false);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	// general: {
	// 	borderBottomWidth: 3,
	// 	borderColor: 'black',
	// },
	container: {
        backgroundColor:'#53a6af',
        borderRadius:10,
        alignSelf:'center',
        paddingRight:3,
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		paddingBottom: 15,
	},
	TouchableOpacityLeftSide: {
		marginVertical: 20,
		paddingBottom: 3,
		marginHorizontal: 20,
		paddingTop: 3,
		paddingHorizontal: 5,
		borderRadius: 10,
		backgroundColor: '#bedadc',
	},
	TouchableOpacityRightSide: {
		marginVertical: 20,
		paddingBottom: 12,
		marginHorizontal: 20,
		paddingTop: 12,
		paddingHorizontal: 5,
		borderRadius: 10,
		backgroundColor: '#bedadc',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'white',
		marginBottom: 10,
		marginRight: 10,
	},
	options: {
		flexDirection: 'row',
		//justifyContent: '',
		marginHorizontal: 100,
		marginRight:0
	},
	image: {
		height: 40,
		width: 40,
	},
});

export default withNavigation(ProjectComp);
