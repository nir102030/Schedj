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
    const [participants,setParticipants] = useState(initialValues.participants);

    return (
            <View style= {styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.text}>{name} Project</Text>
                        <Image source={require('../../../assets/images/project.png')} style={styles.image}/>
                    </View>
                    <FormInput title='Project Name' value = {name} onChange={setName} viewStyle = {styles.viewStyle}/>
                    <FormParticipantsList initialList = {participants}/>
                    <FormInput title='Min for Meeting' value={minForMeeting} onChange = {setMinForMeeting} viewStyle = {styles.viewStyle}/> 
                    <FormInput title='1.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                    <FormInput title='2.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                    <FormInput title='3.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
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
    text:{
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238'
    },
    image:{
        marginVertical:10,
        height:60,
        width:60,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center'
    },
    header:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886',
        backgroundColor:'#8aa9b9'
    },
    viewStyle: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',   
        marginVertical:5
    },
});


export default ProjectForm;