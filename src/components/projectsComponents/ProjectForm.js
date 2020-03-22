import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import FormInput from '../genericComponents/FormInput';
import FormParticipantsList from '../genericComponents/FormParticipantsList';



const ProjectForm = ({navigation,pid, addProject}) => {
    //TODO: 1.get the participants list from the reducers/index 
    const Pparticipants = ['Nir', 'Bar'];
    const [Pname,setPname] = useState(pid);
    const [minForMeeting, setMinForMeeting] = useState('');

    return (
            <View style= {styles.container}>
                <Text style={styles.header}>{Pname} Project </Text>
                <FormInput title='Project Name' value = {pid} onChange={setPname} viewStyle = {{}}/>
                <FormParticipantsList initialList = {Pparticipants}/>
                <FormInput title='Min for Meeting' value={minForMeeting} onChange = {setMinForMeeting}/> 
                <TouchableOpacity onPress = {() => addProject({pid:Pname})}>
                    <Image source={require('../../../assets/images/create.png')} style={styles.image}/>
                </TouchableOpacity>
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
    image:{
        height:50,
        width:150,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center'
    }
});


export default connect(null, actions)(ProjectForm);