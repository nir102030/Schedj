import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import ProjectDetail from './ProjectDetail';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';


const ProjectForm = ({navigation,pid, addProject}) => {
    //TODO: 1.get the participants list from the reducers/index
    //      2.Add an "addProject" reducer and use it in the OnPress property  
    const Pparticipants = ['Nir', 'Bar'];
    const [newPid, setNewPid] = useState('FP');
    return (
            <View style= {styles.container}>
                <Text style={styles.header}>{pid} Project </Text>
                <ProjectDetail parm='Name' value={pid} method='input'/>
                <ProjectDetail parm='Participants' value={Pparticipants} method='picker'/>
                <ProjectDetail parm='Min for Meeting' value={'3'} method = 'input'/>
                <TouchableOpacity onPress = {() => addProject(newPid)}>
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