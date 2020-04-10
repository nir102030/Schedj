import React from 'react'
import {Text, StyleSheet,TouchableOpacity,Image } from 'react-native';


const TaskStatusSetter = ({onPress, text}) => {

    return (
        <TouchableOpacity  style={styles.TouchableOpacity}  onPress={onPress} >
            <Text style={styles.text}>  {text}</Text>
            <Image style={styles.statusStyle}  source={require('../../../assets/images/status.png')}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    TouchableOpacity : {
        flexDirection:'row',
        marginRight:10,
    },

    text:{
        marginLeft:30.1,
        fontWeight:'bold',
        color:'white',
        fontSize: 16,
        flex:1
    },

    statusStyle:{
        height:20,
        width:20
    }
});

export default TaskStatusSetter; 