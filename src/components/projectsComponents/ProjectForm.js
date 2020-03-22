import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import FormInput from '../genericComponents/FormInput';
import FormParticipantsList from '../genericComponents/FormParticipantsList';
import FormSubmitButton from '../genericComponents/FormSubmitButton'; 



const ProjectForm = ({initialValues, onSubmit}) => {
    //TODO: 1.get the participants list from the reducers/index 
    const [name,setName] = useState(initialValues.name);
    const [minForMeeting, setMinForMeeting] = useState('');
    const [participants,setParticipants] = useState(['Nir','Bar']);
    const [note,setNote]  = useState('');


    return (
            <View style= {styles.container}>
                <Text style={styles.header}>{name} Project </Text>
                <FormInput title='Project Name' value = {name} onChange={setName} viewStyle = {styles.viewStyle}/>
                <FormParticipantsList initialList = {participants}/>
                <FormInput title='Min for Meeting' value={minForMeeting} onChange = {setMinForMeeting} viewStyle = {styles.viewStyle}/> 
                <FormInput title='1.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                <FormInput title='2.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                <FormInput title='3.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                <FormSubmitButton onSubmit = {() => onSubmit(name)}/>
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightslategrey',
        height:'100%'
    },
    header:{
        fontWeight:'bold',
        fontSize: 26,
        alignSelf:'center',
        color:'oldlace'
    },
    viewStyle: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',   
        marginVertical:5
    },
});


export default ProjectForm;