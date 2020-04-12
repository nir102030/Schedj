import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopicsList from '../../components/tasksComponents/TopicsList';
import CreateTopic from '../../components/tasksComponents/CreateTopic';


const TasksScreen = ({navigation}) => {
    const project = navigation.getParam('project');

    return (
            <View style={styles.container}> 
                <TopicsList project = {project} style = {styles.list} />
                <CreateTopic project = {project} style = {styles.TouchableOpacity}/>
            </View>
    );
};

TasksScreen.navigationOptions = () => { 
    return{ headerRight:   
            <View>
                <Text style={styles.headerStyle}> Tasks </Text>
            </View>
    };
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
    TouchableOpacity: {
        backgroundColor:'#2b414b',
        flex:2,
        flexDirection:'row-reverse',
        borderBottomWidth:1,
        borderBottomColor:'#d9e3f0',
        paddingTop: 5,
    },
    headerStyle: { 
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 5,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },
});

export default TasksScreen;