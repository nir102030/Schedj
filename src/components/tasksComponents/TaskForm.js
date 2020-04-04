import React,{useState} from 'react';
import {View, Text, StyleSheet,Picklist,TouchableOpacity,Image,TextInput} from 'react-native';
import FormInput from '../../components/genericComponents/FormInput';
import FormSubmitButton from '../genericComponents/FormSubmitButton';


const TaskForm = ({oldTask,onSubmit,type}) => {
    const [task,setTask]  = useState(oldTask);
   
    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Text style={styles.headerStyle}>{task.pid} Project - New Task</Text>
                {/* <Picklist title='Topic' data={topics}  navigation=''/> */}
            </View>
            <FormInput title='Task Name ' value = {task.name} onChange={(name) => setTask({...task, "name":name})} viewStyle = {styles.meetDesign} />
            <FormInput title='Description ' value = {task.description} onChange={(description) => setTask({...task, "description":description})}  viewStyle = {styles.meetDesign} />
            <FormSubmitButton onSubmit = {() => onSubmit(task)} type = {type}/>                   
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',        
        flex:1
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
    meetDesign: {
        marginVertical: 2,
        flexDirection: 'row',
        fontWeight:'bold',
        fontSize: 20,
    }, 
    image: {
        marginVertical: 30,
        height:60,
        width:150,
        borderRadius:10,
        alignSelf:'center'
    },
    schedj: {
        height:400,
        width:370,
        alignSelf:'center'
    },
    text:{
        fontSize: 22,
        marginRight: 10,
        marginTop:8,
        marginBottom:10,
        color:'white'
    },
});

export default TaskForm;