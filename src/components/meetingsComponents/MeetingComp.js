import React, { useState } from 'react';
import {Text, StyleSheet, View,TouchableOpacity, Image, FlatList } from 'react-native';
import {withNavigation} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FormMultiSelect from '../genericComponents/FormMultiSelect';
import FormSectionedMultiSelect from '../genericComponents/FormSectionedMultiSelect'

const MeetingComp = ({tasks, topics, navigation, meeting, deleteMeeting,editTask}) => {
    const taskList = tasks.filter((task) => task.pid === meeting.pid);
    const topicsList = topics.filter((topic) => topic.pid === meeting.pid)
    const taskChoices = topicsList.map((topic) => {
        const children = taskList.filter((task) => task.topic === topic.name).map((task) => {
            return {name: task.name, id: task.tid}
        })
        return {name: topic.name, id: topic.name, children: children}     
    });

    //const meetingTasks = taskList.filter((task) => task.mid === meeting.mid);
    //console.log(meetingTasks);

    const addTasksToMeeting = (selectedItems) => {
        selectedItems.map((selectedItem) => {
            const task = taskList.find((task) => task.tid === selectedItem);
            const editedTask = {...task, mid:meeting.mid}
            editTask(editedTask);
        })
    }
    
    return (
            <View style={styles.container}>
                <TouchableOpacity style = {styles.button} onPress = {() => deleteMeeting(meeting)}>
                    <AntDesign name = 'delete' size= {35}/>
                </TouchableOpacity>  
                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('EditM',{meeting})}>
                    <Image source = {require('../../../assets/images/edit_logo.png')} style={styles.image}/>
                </TouchableOpacity>
                <View style={{flex:4}}>
                    <Text style={styles.header}>Meeting {meeting.mid}</Text>
                    <Text style={styles.date}>{meeting.date}</Text>
                    {/* <FormMultiSelect 
                        taskChoice = {taskChoice}
                        addTasksToMeeting = {(selectedItems) => addTasksToMeeting(selectedItems)} 
                    /> */}
                    <View style = {styles.multiSelect}>
                        <FormSectionedMultiSelect taskChoices = {taskChoices} addTasksToMeeting = {addTasksToMeeting} />
                    </View>
                </View>
            </View>
             
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
        flexDirection:'row'
    },
    header: {
        marginVertical: 5,
        marginHorizontal: 10,
        height: 30,
        fontWeight:'bold',
        fontSize: 24,
        color:'white',
        flex:1,
        flexDirection:'row-reverse'
    }, 
    date: {
        marginVertical: 10,
        marginHorizontal: 12,
        height: 30,
        fontWeight:'bold',
        fontSize: 18,
        color:'white',
        flex:1,
        flexDirection:'row-reverse'
    }, 
    TouchableOpacity: {
        backgroundColor:'#91a5af',
        flex:1,
        flexDirection:'row-reverse',
        alignSelf:'center',
        borderRadius: 20,
    },
    imageAdd: {
        height:35,
        width:35,
        marginRight: 15,
        alignSelf:'center'
    },
    addTask:{
        marginHorizontal: 50,
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center'
    },
    image: {
        height:35,
        width:35,
        marginHorizontal:5
    },
    button: {
        alignSelf:'flex-start',
        flex:1
    },
    multiSelect: {

    }
});

const mapStateToProps = (state) => {
    return {tasks: state.tasks, topics: state.topics}
}

export default connect(mapStateToProps, actions)(withNavigation(MeetingComp));