import React from 'react';
import {Text, StyleSheet, View,TouchableOpacity, Image } from 'react-native';
import {withNavigation} from 'react-navigation';
import {AntDesign} from '@expo/vector-icons';


const MeetingComp = ({navigation,id, pid,meeting, deleteMeeting}) => {
    return (
        <View style={styles.container}>
                <Text style={styles.header}>{pid} Project - Meeting {id}</Text>
                <Text style={styles.date}> Meeting Date</Text>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Tasks')}>
                    <Image source={require('../../../assets/images/addTask.png')} style={styles.imageAdd}/>
                    <Text style={styles.addTask}>Add Task</Text>
                    
                    {/* the code below should be in that format */}

                    {/* <TouchableOpacity style = {styles.delete} onPress = {() => deleteMeeting(meeting)}>
                        <AntDesign name = 'delete' size= {35}/>
                    </TouchableOpacity>   */}
                
                </TouchableOpacity>

                <Text></Text>
        </View>    
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
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
    delete: {
        marginVertical: 5,
        marginHorizontal:99,
        backgroundColor:'red',
        flex:1,
        borderRadius: 10
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
    }
});

export default withNavigation(MeetingComp);