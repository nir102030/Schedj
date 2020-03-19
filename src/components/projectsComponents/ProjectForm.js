import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import ProjectDetail from './ProjectDetail';


const ProjectForm = ({navigation,pid}) => {
    //TODO: 1.get the participants list from the reducers/index
    //      2.Add an "addProject" reducer and use it in the OnPress property  
    const Pparticipants = ['Nir', 'Bar'];

    return (
            <View style= {styles.container}>
                <Text style={styles.header}>{pid} Project </Text>
                <ProjectDetail parm='Name' value={pid} method='input'/>
                <ProjectDetail parm='Participants' value={Pparticipants} method='picker'/>
                <ProjectDetail parm='Min for Meeting' value={'3'} method = 'input'/>
                <TouchableOpacity onPress = {()=>navigation.navigate('Projects')}>
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

export default withNavigation(ProjectForm);