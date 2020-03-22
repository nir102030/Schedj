import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import FormInput from '../genericComponents/FormInput';
import FormParticipantsList from '../genericComponents/FormParticipantsList';
import FormSubmitButton from '../genericComponents/FormSubmitButton'; 



const ProjectForm = ({navigation,pid, onSubmit}) => {
    //TODO: 1.get the participants list from the reducers/index 
    const Pparticipants = ['Nir', 'Bar'];
    const [Pname,setPname] = useState(pid);
    const [minForMeeting, setMinForMeeting] = useState('');

    return (
            <View style= {styles.container}>
                <Text style={styles.header}>{Pname} Project </Text>
                <FormInput title='Project Name' value = {pid} onChange={setPname} viewStyle = {styles.viewStyle}/>
                <FormParticipantsList initialList = {Pparticipants}/>
                <FormInput title='Min for Meeting' value={minForMeeting} onChange = {setMinForMeeting} viewStyle = {styles.viewStyle}/> 
                <FormSubmitButton onSubmit = {() => onSubmit(Pname)}/>
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
        fontSize: 27,
        alignSelf:'center',
        color:'oldlace'
    },
    viewStyle: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',      
    },
});


export default ProjectForm;