import React from 'react';
import TaskForm from '../../components/tasksComponents/TaskForm';
import { View,StyleSheet,Text,TouchableOpacity,Image } from 'react-native'

import * as actions from '../../actions';
import { connect } from 'react-redux';
import { addTaskToDb } from '../../firebase/tasksAPI';

const CreateTaskScreen = ({ navigation, addTask }) => {
	const topic = navigation.getParam('topic');

	const task = {
		pid: topic.pid,
		topic: topic.name,
		mid: 0,
		tid: Math.floor(Math.random() * 99999),
		name: '',
		description: '',
		status: 0.3,
		color: 'red',
	};

	const onSubmit = (task) => {
		addTask(task);
		addTaskToDb(task);
		navigation.pop();
	};

	return <TaskForm oldTask={task} onSubmit={(task) => onSubmit(task)} type="create" />;
};

CreateTaskScreen.navigationOptions = ({navigation}) => { 
    return{ headerRight:   
            <View style={styles.navigator}>
                <Text style={styles.headerStyle}> Add New Task </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
    };
};
export default connect(null, actions)(CreateTaskScreen);


const styles = StyleSheet.create({
    navigator:{
        flexDirection: 'row',
	},
	headerStyle: { 
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 5,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },  
	home: {
		height: 35,
        width: 35,
        marginRight:10
	}
});