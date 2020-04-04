import React from 'react';
import {Text, StyleSheet, View,TouchableOpacity, Image } from 'react-native';
import {withNavigation} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux';

const MeetingComp = ({tasks, navigation, meeting, deleteMeeting}) => {
    const taskList = tasks.filter((task) => task.pid === meeting.pid);
    const taskChoice = taskList.map((task) => {
            return {'label':task.name, 'value': task.name}
    });
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
                    <Text style={styles.date}> {meeting.date}</Text>
                    <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Tasks')}>
                        <Image source={require('../../../assets/images/addTask.png')} style={styles.imageAdd}/>
                        <Text style={styles.addTask}>Add Task</Text>
                    </TouchableOpacity>
                    <RNPickerSelect 
                        placeholder={{}}
                        onValueChange={() => {}}
                        items= {taskChoice}
                        style={{ }}
                    />
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
        color:'#263238',
        flex:1,
        flexDirection:'row-reverse'
    }, 
    date: {
        marginVertical: 10,
        marginHorizontal: 12,
        height: 30,
        fontWeight:'bold',
        fontSize: 18,
        color:'black',
        flex:1,
        flexDirection:'row-reverse'
    }, 
    TouchableOpacity: {
        marginVertical: 5,
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
        marginHorizontal: 10,
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