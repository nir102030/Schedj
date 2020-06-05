import React from 'react'
import {Text, StyleSheet,TouchableOpacity,Image } from 'react-native';


const TaskStatusSetter = ({onPress, text}) => {

    return (
        <TouchableOpacity  style={styles.TouchableOpacity}  onPress={onPress} >
            <Text style={styles.text}>  {text} </Text>
            <Image style={styles.statusStyle}  source={require('../../../assets/images/status1.png')}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    TouchableOpacity : {
        flexDirection:'row',
        marginRight:10,
        marginVertical:0.5,
    },

    text:{
        marginLeft:30.1,
        fontWeight:'bold',
        color:'black',
        fontSize: 14,
        flex:1,
    },

    statusStyle:{
        height:15,
        width:15,
        marginVertical:2

    }
});

export default TaskStatusSetter; 