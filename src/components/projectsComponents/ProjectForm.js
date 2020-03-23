import React, {useState} from 'react';
import {Text, StyleSheet, View, Image,ScrollView} from 'react-native';
import FormInput from '../genericComponents/FormInput';
import FormParticipantsList from '../genericComponents/FormParticipantsList';
import FormSubmitButton from '../genericComponents/FormSubmitButton'; 



const ProjectForm = ({initialValues, onSubmit}) => {
    //TODO: 1.get the participants list from the reducers/index 
    const [name,setName] = useState(initialValues.name);
    const [note,setNote]  = useState('');
    const [minForMeeting, setMinForMeeting] = useState(initialValues.minForMeeting);
    const [reminder, setReminder] = useState(initialValues.reminder);
    const Pparticipants = ['Nir', 'Bar','Dor'];

    return (
            <View style= {styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text}>{name} Project</Text>
                        <Image source={require('../../../assets/images/project.png')} style={styles.image}/>
                    </View>
                    <ScrollView>
                    <Text  style={styles.fillRequired}>Please fill the required fields </Text>
                    <FormInput title='Project Name:' value = {name} onChange={setName} viewStyle = {styles.projectName}/>
                    <FormParticipantsList initialList = {Pparticipants}/>
                    <FormInput title='Min Participants For Meeting:' value={minForMeeting} onChange = {setMinForMeeting} viewStyle = {styles.minMeet}/> 
                    <FormInput title='Reminder Before Meeting:' value={reminder} onChange = {setReminder} viewStyle = {styles.minMeet}/> 
                    <Text  style={styles.note}>   Write your notes here!  </Text>
                    <FormInput title='1.' value = {note} onChange={setNote} viewStyle = {styles.notes}/>
                    <FormInput title='2.' value = {note} onChange={setNote} viewStyle = {styles.notes}/>
                    <FormInput title='3.' value = {note} onChange={setNote} viewStyle = {styles.notes}/>
                    <Text  style={styles.task}>   *Define your tasks later  </Text>
                    <FormSubmitButton onSubmit = {() => onSubmit(name,minForMeeting)}/>
                </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightslategrey',
        height:'100%'
    },
    fillRequired: {
        backgroundColor:'red',        
        flex:1
    },
    text:{
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },
    image:{
        marginVertical:10,
        height:60,
        width:60,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    header:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
    },
    projectName: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',   
    },
    minMeet: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',  
        marginBottom:10 
    },
    notes: {
        flexDirection: 'row',
    }, 
    note: {
        alignSelf:'center',
        fontWeight:'bold',
    },
    task:{
        marginTop: 15,
        //alignSelf:'center',
        fontWeight:'bold',
        color:'#263238'
    },
});


export default ProjectForm;