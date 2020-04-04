import React from 'react';
import TaskForm from '../../components/tasksComponents/TaskForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const CreateTaskScreen = ({navigation, addTask}) => {
    const topic = navigation.getParam('topic');
    
    const task = {pid:topic.pid, topic:topic.name, mid: 0, tid: '', name:'', description:''}

    const onSubmit = (task) => {
        addTask(task);
        navigation.pop();
    }

    return (
        <TaskForm
            oldTask = {task}
            onSubmit = {(task) => onSubmit(task)}
            type = 'create'
        />
    );
};

export default connect(null,actions)(CreateTaskScreen)