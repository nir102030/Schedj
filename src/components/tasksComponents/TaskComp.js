import React, {useState} from 'react'
import {Text, StyleSheet, View,CheckBox } from 'react-native';
import * as Progress from 'react-native-progress';
import {withNavigation} from 'react-navigation';


const TaskComp = ({navigation,task, deleteTask}) => {
    const [checked,setChecked]  = useState();

    return (
        <View style={styles.progCheckRow}>
            <CheckBox title={task.name} checked={setChecked} style={styles.CheckBox} value={true}/>
            <Progress.Bar progress={0.05} width={200} height={30} animated={true} color={'red'} borderColor={'#99BAC9'} marginVertical={10}/>
            <Progress.Bar progress={0.65} width={200} height={30} animated={true} color={'#fccb00'} borderColor={'#99BAC9'} marginVertical={10}/>
            <Progress.Bar progress={1} width={200} height={30} animated={true} color={'#008B02'} borderColor={'#99BAC9'} marginVertical={10}/>
            <Text style={styles.task}> {task.name}  </Text>
            
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
        color:'#263238',
    },
    progCheckRow:{
        flexDirection: 'row',
        alignSelf:'center',
        marginLeft:37
    }, 
    CheckBox:{
        backgroundColor:'white',
        marginVertical:10,
        marginHorizontal:10,
        fontSize: 20
    }
});

export default withNavigation(TaskComp);