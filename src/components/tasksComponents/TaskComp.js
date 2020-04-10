import React, {useState} from 'react'
import {Text, StyleSheet, View,CheckBox,Button,TouchableOpacity,Image } from 'react-native';
import * as Progress from 'react-native-progress';
import {withNavigation} from 'react-navigation';
import TaskStatusSetter from './TaskStatusSetter';
import { showMessage, hideMessage } from "react-native-flash-message";


const TaskComp = ({navigation,task, deleteTask}) => {
    const [progress,setProgress]  = useState(0.3);
    const [color,setColor]  = useState('red');
    const [text,setText] = useState('Next Stage');
    
    const setStatusAndColor = (progress,color) => {
        setProgress(progress);
        setColor(color);
    }

    const setTaskStatus = (type) => {
        switch(type) {
            case 'next':
                return(
                    progress<0.65 && progress >=0.3?
                    setStatusAndColor(0.65, '#fccb00')
                    :progress >= 0.65 ? setStatusAndColor(1, '#008B02'):null
                );
            case 'previous':
                return(
                    progress>0.65?
                    setStatusAndColor(0.65,'#fccb00'):
                    setStatusAndColor(0.3,'red')
                );
        }
    }
    
    return (
        <View style={styles.progCheckRow}>
            <TouchableOpacity style={styles.prog}  onPress={() => {showMessage({message:task.name,description:task.description ,type: "info",color:"white",backgroundColor:'#455a64' })}} >
                <Text style={styles.task}>{task.name}</Text>
            </TouchableOpacity>  
            <Progress.Bar style={styles.prog} progress={progress} width={150} height={30} animated={true} color={color} borderColor={'#99BAC9'} marginVertical={10}/>
                <View style={styles.AAA}>
                    <TaskStatusSetter onPress={() => {setTaskStatus('next')}} text = {'Next Stage'}/>
                    <TaskStatusSetter onPress={() => {setTaskStatus('previous')}} text = {'Previous Stage'}/>
                </View>
        </View>
    )
};

 // <View style={styles.progCheckRow}>
       
        //     <ProgressSteps disabledStepNumColor='red' borderWidth={4} activeStepIconColor='#ebebe4' activeLabelColor='white'  >
        //         <ProgressStep label="Pending" nextBtnStyle={{}} centerContainer={true} nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} />
        //         <ProgressStep label="In Progress" nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} />
        //         <ProgressStep label="Done" nextBtnTextStyle={buttonTextStyle3} previousBtnTextStyle={buttonTextStyle2} />
        //     </ProgressSteps>
        // </View>
{/* <Progress.Bar progress={progress} width={200} height={30} animated={true} color={color} borderColor={'#99BAC9'} marginVertical={10}/>
<Button onPress={() => {showMessage({message:task.name,description:task.description ,type: "info",color:"white",backgroundColor:'#455a64' })}}/>
}} title={task.name} color="#607d8b" /> */}

const styles = StyleSheet.create({ 
    container:{
        backgroundColor:'#607d8b'
    },
    prog:{
        flex:1
    },
    BBB:{
        //paddingTop:3,
        marginLeft:0,
        fontWeight:'bold',
        color:'white',
        fontSize: 16,
        flex:1
    },
    task:{
        paddingTop:12,
        marginLeft:10,
        fontWeight:'bold',
        fontSize: 20,
        color:'white',
        flex:1
    },
    AAA:{
        flexDirection: 'column',
        marginTop:5,
        marginVertical:3,
        flex:2
    },
    nxtPrv:{
        flexDirection: 'column',
    },
    progCheckRow:{
        flexDirection: 'row-reverse',
        borderBottomWidth: 1,
        borderBottomColor:'#d9e3f0',
        //justifyContent:'space-between',
        paddingLeft:20,
        alignSelf:'center',        
    }, 
});

export default withNavigation(TaskComp);