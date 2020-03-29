import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList,Image,ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import TaskComp from './TaskComp';

const TaskList = ({style, pid}) => {
    const taskList = ['Create Presentation', 'Screenshots', 'Plan Future Development']
    const [tasks, setTasks] = useState(taskList);

    function Item({ id }) {
        return (
          <View style={styles.item}>
            <TaskComp id={id} pid= {pid}/>
          </View>
        );
    }
    return (
        <View style = {style}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.text}>{pid} Project Tasks</Text>
                    <Image source={require('../../../assets/images/Task.png')} style={styles.image}/>
                </View>
                <FlatList
                    data = {taskList}
                    keyExtractor={(tasks)=> tasks}
                    renderItem= {({item}) => <Item id={item}/>}  
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        padding:3,
        marginVertical: 10
    },
    image:{
        marginVertical:10,
        height:60,
        width:60,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center'
    },
    header:{
        flexDirection:'row', 
        flexWrap:'wrap',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886',
        backgroundColor:'#8aa9b9',
    },
    text:{
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
    }
});

export default withNavigation(TaskList);