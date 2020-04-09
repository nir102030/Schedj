import React, {useState} from 'react'
import {Text, StyleSheet, View,CheckBox,Button,TouchableOpacity,Image } from 'react-native';
import * as Progress from 'react-native-progress';
import {withNavigation} from 'react-navigation';
import { ProgressSteps, ProgressStep,ProgressButtons } from 'react-native-progress-steps';
import { showMessage, hideMessage } from "react-native-flash-message";


const TaskComp = ({navigation,task, deleteTask}) => {
    // const [checked,setChecked]  = useState();
    const [progress,setProgress]  = useState(0.3);
    const [color,setColor]  = useState('red');

    const f1 = ()=>{ setProgress(0.65)}
    const f2 = ()=>{ setColor('#fccb00')}
    const InProgress = ()=>{ f1(), f2()}
    const f3 = ()=>{ setProgress(1)}
    const f4 = ()=>{ setColor('#008B02')}
    const Done = ()=>{ f3(), f4()}
    const f5 = ()=>{ setProgress(0.3)}
    const f6 = ()=>{ setColor('red')}
    const Start = ()=>{ f5(), f6()}

    const buttonTextStyle1 = {color: 'white'};
    const buttonTextStyle2 = {color: '#263238'};
    const buttonTextStyle3 = { display: 'none'};

    const [text,setText] = useState('Next Stage');


    return (
        <View style={styles.progCheckRow}>
            <TouchableOpacity style={styles.prog}  onPress={() => {showMessage({message:task.name,description:task.description ,type: "info",color:"white",backgroundColor:'#455a64' })}} >
                <Text style={styles.task}>{task.name}</Text>
            </TouchableOpacity>  
            <Progress.Bar style={styles.prog} progress={progress} width={150} height={30} animated={true} color={color} borderColor={'#99BAC9'} marginVertical={10}/>
                <View style={styles.AAA}>
                    <TouchableOpacity  style={{flexDirection:'row',marginRight:10,flex:1}}  onPress={() => {InProgress();setText(' Last Stage');}} >
                        <Text style={styles.BBC}>  {text}</Text>
                        <Image style={styles.statusStyle}  source={require('../../../assets/images/status.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',marginRight:10,flex:1}}  onPress={() => {Start();setText('Next Stage');}} >
                        <Text style={styles.BBB}>  Previous Stage</Text>
                        <Image style={styles.statusStyle}  source={require('../../../assets/images/status.png')}/>
                    </TouchableOpacity>  
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
    BBC:{
        //paddingTop:3,
        marginLeft:30.1,
        fontWeight:'bold',
        color:'white',
        fontSize: 16,
        flex:1

    },
    statusStyle:{
        height:20,
        width:20
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