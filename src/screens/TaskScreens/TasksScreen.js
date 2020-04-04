import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopicsList from '../../components/tasksComponents/TopicsList';
import CreateTopic from '../../components/tasksComponents/CreateTopic';


const TasksScreen = ({navigation}) => {
    const project = navigation.getParam('project');

    return (
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Text style={styles.headerStyle}> {project.id} Project - Tasks</Text>
                </View>
                <TopicsList project = {project} style = {styles.list} />
                <CreateTopic project = {project} style = {styles.TouchableOpacity}/>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#607d8b'
    },
    list: {
        flex:8,
        backgroundColor:'#607d8b'
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886',
        flex:1
    },
    headerStyle: {        
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },
    TouchableOpacity: {
        backgroundColor:'#2b414b',
        flex:2,
        flexDirection:'row-reverse',
        borderBottomWidth:1,
        borderBottomColor:'#d9e3f0',
        paddingTop: 5,
    }
});

export default TasksScreen;