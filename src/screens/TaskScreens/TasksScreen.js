import React,{useState} from 'react';
import {View, Text, StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import TopicsList from '../../components/tasksComponents/TopicsList';


const TasksScreen = ({navigation}) => {
    const project = navigation.getParam('project');

    return (
        <ScrollView> 
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Text style={styles.headerStyle}> {project.id} Project - Tasks</Text>
                </View>
                <TopicsList project = {project} style = {styles.list}/>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress ={()=>navigation.navigate('CreateT')}>
                    <Image source={require('../../../assets/images/addTopic.png')} style={styles.image}/>
                    <Text style={styles.text}>  Add a New Topic</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#607d8b'
    },
    list: {
        flex:9,
        backgroundColor:'#607d8b'
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886'
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
        flex:1,
        flexDirection:'row-reverse',
        borderBottomWidth:1,
        borderBottomColor:'#d9e3f0',
        paddingTop: 5,
    },
    image: {
        height:37,
        width:37,
        marginRight: 15,
        alignSelf:'center'
    },
    text: {
        fontSize:20,
        color:'oldlace',
        alignSelf:'center',
        fontWeight:'bold',
        marginVertical:12,
    },
});

export default withNavigation(TasksScreen);