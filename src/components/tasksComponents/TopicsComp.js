import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import TaskList from './TaskList';

const TopicsComp = ({navigation, topic}) => {
    return (
        <View style={styles.container}>
            <View style = {styles.topic}>
                <Text style={styles.subHeader}> {topic.name} </Text>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('CreateT', {topic})}>
                    <Text style={styles.text}>  Add a New Task</Text>
                    <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                </TouchableOpacity>
            </View>
            <TaskList topic = {topic} style = {styles.list}/>
        </View>    
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0'
    },
    list: {
        flex:9,
        backgroundColor:'#607d8b'
    },
    topic: {
        flexDirection:'row-reverse'
    },
    subHeader: {
        fontSize: 22,
        color:'white',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
        flex:4
    },
    TouchableOpacity: {
        flex:3,
        flexDirection:'row-reverse',
        alignSelf:'baseline'
    },
    text:{
        flex:4,
        fontSize:20,
        color:'oldlace',
        alignSelf:'center',
        fontWeight:'bold'
    },
    image: {
        height:37,
        width:37,
        marginRight: 15,
        alignSelf:'center',
        flex:1
    },
    
});

export default withNavigation(TopicsComp)