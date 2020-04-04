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
                    <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                    <Text style={styles.text}>Add a New Task</Text>
                </TouchableOpacity>
            </View>
            <TaskList topic = {topic} style = {styles.list}/>
        </View>    
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',
        flex:1,
    },
    list: {
        flex:9,
        backgroundColor:'#607d8b'
    },
    topic: {
        flexDirection:'row-reverse',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0'
    },
    subHeader: {
        fontSize: 22,
        color:'white',
        flex:4,
        marginVertical:10,
        fontWeight:'bold',
    },
    TouchableOpacity: {
        flex:4,
        flexDirection:'row-reverse',
    },
    text:{
        flex:4,
        fontSize:20,
        color:'oldlace',
        alignSelf:'center',
    },
    image: {
        height:37,
        width:37,
        alignSelf:'center',
        marginHorizontal:5
    },
    
});

export default withNavigation(TopicsComp)