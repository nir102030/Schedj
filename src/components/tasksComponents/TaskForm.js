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
            <FormInput title='Task Name ' value = {task.name} long={15} onChange={(name) => setTask({...task, "name":name})} viewStyle = {styles.task} />
            <View style={styles.meetDesign}>
                <TextInput style={styles.input} autoGrow='true' placeholder={task.description} value={task.description} onChangeText={(description) => setTask({...task, "description":description})}/>
                <Text style={styles.text}>Description  </Text> 
            </View>
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
    task: {
        marginVertical: 2,
        flexDirection: 'row',
        fontWeight:'bold',
        fontSize: 20,
    }, 
    input: {
        marginTop:7,
        marginBottom:7,
        marginRight:5,
        marginLeft: 10,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#b1c2ca',
        borderRadius:5,
        flex: 1,
        fontSize:16,
        fontWeight:'bold',
        lineHeight: 10,
        height:200,
        //textAlignVertical: ''
        
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
        fontSize: 20,
        marginRight: 10,
        marginTop:8,
        marginBottom:10,
        color:'white',
    },
});

export default TaskForm;