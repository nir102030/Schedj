import React from 'react'
import {Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation';


const MeetingComp = ({navigation,id, pid}) => {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>{pid} Project - Meeting {id}</Text>
                <Text style={styles.text}> Meeting Date</Text>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Tasks')}>
                    <Text style={styles.inside}> Add Task </Text>
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
    tasks: {
        marginHorizontal: 10,
    },
    text: {
        marginVertical: 5,
        marginHorizontal: 10,
        height: 30,
        fontWeight:'bold',
        fontSize: 24,
        color:'#263238',
        flex:1,
        flexDirection:'row-reverse'
    }, 
    inside:{
        marginHorizontal: 15,
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    },
    TouchableOpacity: {
        marginVertical: 5,
        backgroundColor:'white',
        flex:1,
        flexDirection:'row-reverse',
        alignSelf:'center',
        borderRadius: 20,
    },
    image: {
        height:50,
        width:50,
        marginRight: 15,
        alignSelf:'center'
    },
    Date:{
        backgroundColor:'#607d8b',
        marginHorizontal: 5,
        height: 60,
        fontWeight:'bold',
        fontSize: 20,
        color:'black'
    },
});

export default withNavigation(MeetingComp);