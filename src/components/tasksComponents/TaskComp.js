import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { withNavigation } from 'react-navigation';
import TaskStatusSetter from './TaskStatusSetter';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { connect } from 'react-redux';
import Alert from '../../components/genericComponents/Alert';
import * as actions from '../../actions';

const TaskComp = ({ task, deleteTask, editTask }) => {
	const [showAlert, setShowAlert] = useState(false);
	const setStatusAndColor = (progress, color) => {
		editTask({ ...task, status: progress, color: color });
	};

	const setTaskStatus = (type) => {
		switch (type) {
			case 'next':
				return task.status < 0.65 && task.status >= 0.3
					? setStatusAndColor(0.65, '#fccb00')
					: task.status >= 0.65
					? setStatusAndColor(1, '#008B02')
					: null;
			case 'previous':
				return task.status > 0.65 ? setStatusAndColor(0.65, '#fccb00') : setStatusAndColor(0.3, 'red');
		}
	};

	return (
		<View style={styles.progCheckRow}>
			<TouchableOpacity
				style={styles.prog}
				onPress={() => {
					showMessage({
						message: task.name,
						description: task.description,
						type: 'info',
						color: 'white',
						backgroundColor: '#455a64',
					});
				}}
			>
			<Text style={styles.task}>{task.name}</Text>
			</TouchableOpacity>
			<Progress.Bar
				style={styles.prog}
				progress={task.status}
				width={150}
				height={35}
				animated={true}
				color={task.color}
				borderColor={'#99BAC9'}
				marginVertical={7}
			/>
			<View style={styles.AAA}>
				<TaskStatusSetter
					onPress={() => {
						setTaskStatus('next');
					}}
					text={'Next Stage'}
				/>
				<TaskStatusSetter
					onPress={() => {
						setTaskStatus('previous');
					}}
					text={'Previous Stage'}
				/>
			</View>
			<TouchableOpacity onPress={() => setShowAlert(true)}>
				<Image source={require('../../../assets/images/delete.png')} style={styles.image} />
			</TouchableOpacity>
			<Alert
				showAlert={showAlert}
				message="delete this task?"
				onCancel={() => setShowAlert(false)}
				onConfirm={() => {
					deleteTask(task);
					//deleteTasktFromDb(task) @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
					() => setShowAlert(false);
				}}
			/>
		</View>
	);
};

// <View style={styles.progCheckRow}>

//     <ProgressSteps disabledStepNumColor='red' borderWidth={4} activeStepIconColor='#ebebe4' activeLabelColor='white'  >
//         <ProgressStep label="Pending" nextBtnStyle={{}} centerContainer={true} nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} />
//         <ProgressStep label="In Progress" nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} />
//         <ProgressStep label="Done" nextBtnTextStyle={buttonTextStyle3} previousBtnTextStyle={buttonTextStyle2} />
//     </ProgressSteps>
// </View>
{
	/* <Progress.Bar progress={progress} width={200} height={30} animated={true} color={color} borderColor={'#99BAC9'} marginVertical={10}/>
<Button onPress={() => {showMessage({message:task.name,description:task.description ,type: "info",color:"white",backgroundColor:'#455a64' })}}/>
}} title={task.name} color="#607d8b" /> */
}

const styles = StyleSheet.create({
	prog: {
		flex: 1,		
	},
	BBB: {
		marginLeft: 0,
		fontWeight: 'bold',
		color: 'white',
		fontSize: 16,
		flex: 1,
	},
	task: {
		paddingTop: 12,
		marginLeft: 10,
		fontWeight: 'bold',
		fontSize: 11,
		color: 'black',
		flex: 1,
	},
	AAA: {
		flexDirection: 'column',
		marginTop: 5,
		marginVertical: 3,
		flex: 2,
	},
	nxtPrv: {
		flexDirection: 'column',
	},
	progCheckRow: {
		flex: 1,
		backgroundColor:'#bbdde1',
        borderRadius:10,
		flexDirection: 'row-reverse',
		paddingLeft: 20,
	},
	image:{
		//marginTop:40,
		paddingTop:20,
		width:20,
		height:20
	}
});

export default connect(null, actions)(withNavigation(TaskComp));
