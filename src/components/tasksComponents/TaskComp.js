import React, {useState} from 'react'
import {Text, StyleSheet, View,CheckBox,Button } from 'react-native';
import * as Progress from 'react-native-progress';
import {withNavigation} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { showMessage, hideMessage } from "react-native-flash-message";


const TaskComp = ({navigation,task, deleteTask}) => {
    const [checked,setChecked]  = useState();
    const [progress,setProgress]  = useState(0.05);
    const [color,setColor]  = useState('red');

    const f1 = ()=>{ setProgress(0.65)}
    const f2 = ()=>{ setColor('#fccb00')}
    const InProgress = ()=>{ f1(), f2()}
    const f3 = ()=>{ setProgress(1)}
    const f4 = ()=>{ setColor('#008B02')}
    const Done = ()=>{ f3(), f4()}

    const buttonTextStyle1 = {color: 'white'};
    const buttonTextStyle2 = {color: '#263238'};
    const buttonTextStyle3 = { display: 'none'};


    return (
        <View style={styles.progCheckRow}>
                <ProgressSteps disabledStepNumColor='red' borderWidth={4} activeStepIconColor='#ebebe4' activeLabelColor='white'  >
                    <ProgressStep label="Pending" centerContainer={true} nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} >
                        <View style={{}}>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="In Progress" nextBtnTextStyle={buttonTextStyle1} previousBtnTextStyle={buttonTextStyle2} >
                        <View style={{}}>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Done" nextBtnTextStyle={buttonTextStyle3} previousBtnTextStyle={buttonTextStyle2} >
                        <View style={{}}>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
                <Button onPress={() => {showMessage({message:task.name,description:task.description ,type: "info",color:"white",backgroundColor:'#455a64' });
                        }} title={task.name} color="#607d8b" />
                {/* <Progress.Bar progress={progress} width={200} height={30} animated={true} color={color} borderColor={'#99BAC9'} marginVertical={10}/> */}
        </View>
        

    )
};

const styles = StyleSheet.create({ 

    container: {
        backgroundColor:'#607d8b',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
    },
    task:{
        marginVertical:10,
        fontWeight:'bold',
        fontSize: 20,
        color:'white',
        paddingTop:25
    },
    progCheckRow:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor:'#d9e3f0',
        justifyContent:'center'
        
    }, 
});

export default withNavigation(TaskComp);