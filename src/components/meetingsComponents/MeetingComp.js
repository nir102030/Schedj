import React from 'react'
import {Text, StyleSheet, View,TouchableOpacity } from 'react-native'

const MeetingComp = ({navigation,id, pid}) => {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>{pid} Project, Meeting {id} <Text style={styles.Date}> Date:   __ /__ /__  </Text> </Text>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('CreateM')}>
                    <Text style={styles.inside}> Add Task </Text>
                </TouchableOpacity>
                <Text style={styles.tasks}> # Define functional demands </Text>
        </View>    
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'lightslategrey'

    },
    tasks: {
        marginHorizontal: 10,
    },
    text: {
        backgroundColor:'#607d8b',
        //marginVertical: 20,
        marginHorizontal: 10,
        height: 30,
        fontWeight:'bold',
        fontSize: 22,
        color:'oldlace'

    }, 
    TouchableOpacity: {
        backgroundColor:'white',
        flex:1,
        flexDirection:'row-reverse'
    },
    image: {
        height:50,
        width:50,
        marginRight: 15,
        alignSelf:'center'
    },
    Date:{
        backgroundColor:'#607d8b',
        marginHorizontal: 10,
        height: 60,
        fontWeight:'bold',
        fontSize: 20,
        color:'black'
    },
    inside:{
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight:'bold',
        color:'#11084c'  
    }
});

export default MeetingComp;