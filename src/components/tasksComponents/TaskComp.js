import React, {useState} from 'react'
import {Text, StyleSheet, View,CheckBox,Button,TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import {withNavigation} from 'react-navigation';
import { ProgressSteps, ProgressStep,ProgressButtons } from 'react-native-progress-steps';
import { showMessage, hideMessage } from "react-native-flash-message";


const TaskComp = ({navigation,task, deleteTask}) => {
    // const [checked,setChecked]  = useState();
    // const [progress,setProgress]  = useState(0.05);
    // const [color,setColor]  = useState('red');

    // const f1 = ()=>{ setProgress(0.65)}
    // const f2 = ()=>{ setColor('#fccb00')}
    // const InProgress = ()=>{ f1(), f2()}
    // const f3 = ()=>{ setProgress(1)}
    // const f4 = ()=>{ setColor('#008B02')}
    // const Done = ()=>{ f3(), f4()}

    const buttonTextStyle1 = {color: 'white'};
    const buttonTextStyle2 = {color: '#263238'};
    const buttonTextStyle3 = { display: 'none'};
      
    return (
        <View style={styles.progCheckRow}>
            <TouchableOpacity onPress={() => {showMessage({message:task.name,description:task.description ,type: "info",color:"white",backgroundColor:'#455a64' })}} >
                <Text style={styles.task}>{task.name}</Text>
            </TouchableOpacity>
                <ProgressSteps disabledStepNumColor='red' borderWidth={4} activeStepIconColor='#ebebe4' activeLabelColor='white'  >
                    <ProgressStep label="Pending" nextBtnStyle={{}} centerContainer={true} nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} />
                    <ProgressStep label="In Progress" nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} />
                    <ProgressStep label="Done" nextBtnTextStyle={buttonTextStyle3} previousBtnTextStyle={buttonTextStyle2} />
                </ProgressSteps>
        </View>
    )
};

{/* <Progress.Bar progress={progress} width={200} height={30} animated={true} color={color} borderColor={'#99BAC9'} marginVertical={10}/> */}
{/* <Button onPress={() => {showMessage({message:task.name,description:task.description ,type: "info",color:"white",backgroundColor:'#455a64' })}}/> */}
// }} title={task.name} color="#607d8b" />

const styles = StyleSheet.create({ 
    container:{
        backgroundColor:'#607d8b'
    },
    task:{
        paddingLeft:10,
        marginLeft:10,
        fontWeight:'bold',
        fontSize: 20,
        color:'white',
    },
    progCheckRow:{
        flexDirection: 'row-reverse',
        borderBottomWidth: 1,
        borderBottomColor:'#d9e3f0',
        justifyContent:'center'
        
    }, 
});

export default withNavigation(TaskComp);