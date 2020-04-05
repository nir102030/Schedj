import React, { useState } from 'react';
import {Text, StyleSheet, View,TouchableOpacity, Image } from 'react-native';
import {withNavigation} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons';
import { connect } from 'react-redux';
import FormMultiSelect from '../genericComponents/FormMultiSelect';

const MeetingComp = ({tasks, navigation, meeting, deleteMeeting, multiSelect}) => {
    const taskList = tasks.filter((task) => task.pid === meeting.pid);
    const taskChoice = taskList.map((task) => {
            return {'id':task.tid, 'name': task.name}
    })

    console.log(tasks);
    console.log(taskList);
    console.log(taskChoice);
    
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
                    <Text style={styles.date}>Meeting Date {meeting.date}</Text>
                    {/* <RNPickerSelect 
                            placeholder={{label:'Pick Your Meeting Tasks',value:'',color:'red'}}
                            onValueChange={() => {}}
                            items= {taskChoice}
                            style={{}}
                        /> */}
                    <FormMultiSelect taskChoice = {taskChoice}/>
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
    }
});

const mapStateToProps = (state) => {
    return {tasks: state.tasks}
}

export default connect(mapStateToProps)(MeetingComp);