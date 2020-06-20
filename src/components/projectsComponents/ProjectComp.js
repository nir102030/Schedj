import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';
import Swipeable from 'react-native-swipeable-row';
import Alert from '../genericComponents/Alert';
import { withNavigation } from 'react-navigation';
import { deleteProjectFromDb } from '../../firebase/projectsAPI';
import { showMessage, hideMessage } from 'react-native-flash-message';


const ProjectComp = ({ project, deleteProject, navigation }) => {
	const [showAlert, setShowAlert] = useState(false);
	const todayDate = new Date().toJSON().substring(0, 10).replace(/-/g,'/')
	const dueDateProject = project.date.toString().substring(0, 10).replace(/-/g,'/')
	const subDates= Math.abs(new Date(todayDate)-new Date(dueDateProject))/1000/60/60/24
	const color = subDates <= 7 ? '#a00b0b' : '#194d33';
	const note = subDates <= 7 ? '- Hurry Up!!!' : '- Take your time ✌';


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
					<View style={{ flexDirection: 'column' }}>
						<View style={{ flexDirection: 'row-reverse' }}>
							<Text style={styles.text}>{project.name}</Text>
							<TouchableOpacity style={styles.date} onPress={() => {
								showMessage({
									message: `Due date for your ${project.name} Project `,
									description: `${subDates} Days left for the project ${note}`,	
									color: 'black',
									backgroundColor: '#c2dbe6',
								});
							}}>
								<Text style={{color:color,fontWeight:'bold'}}> Due Date:  </Text>
								<Text style={{color:color}}>{project.date.toString().substring(0, 10)}</Text>
							</TouchableOpacity>
						</View>
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
					<ProjectStatus project={project} />
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
	container: {
		backgroundColor: '#53a6af',
		borderRadius: 10,
		alignSelf: 'center',
		paddingRight: 3,
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		paddingBottom: 15,
	},
	date: {
		fontSize: 15,
		fontWeight:'bold',
		flex:1.9,
		flexDirection:'row-reverse',
		alignSelf:'center',
		justifyContent:'flex-start',
		// paddingLeft:10,
		marginBottom:5,
	},
	e:{
		color: 'white',
		fontWeight:'bold',
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
		flex:5,
		color: 'white',
		marginBottom: 10,
		marginRight: 10,
	},
	options: {
		flexDirection: 'row',
		marginHorizontal: 100,
		marginRight: 0,
	},
	image: {
		height: 40,
		width: 40,
	},
});

export default withNavigation(ProjectComp);
