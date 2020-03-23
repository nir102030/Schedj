import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import TaskList from '../../components/tasksComponents/TaskList';

const TaskScreen = ({navigation, pid}) => {
    return (
        <View style={styles.container} pid={pid}>
            <TaskList style={styles.list}/>
            <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('CreateT')}>
                <Image source={require('../../../assets/images/add.png')} style={styles.image}/>
                <Text style={styles.text}>  Add a New Task</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%'
    },
    list: {
        flex:9,
        backgroundColor:'lightslategrey'
    },
    TouchableOpacity: {
        backgroundColor:'#2b414b',
        flex:1,
        flexDirection:'row-reverse'
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
        fontWeight:'bold'
    }
});

export default TaskScreen;