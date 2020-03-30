import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ProjectInvitation = ({pid,Owner,Inviter,List}) => {

    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>New Project Invitation </Text>
            </View>
            <ScrollView>
            <Text style={styles.freeText1}>Hello {Owner}  </Text>
            <Text style={styles.freeText}>You have got a new invitation for : </Text>
            <Text style={styles.projName}>{pid} Project</Text>
            <Text style={styles.freeText}>Rest of the team includes : {List}</Text>
            <Text style={styles.freeText}>Would you like to approve the invitation ? </Text>

            <TouchableOpacity style = {styles.TouchableOpacity}>
                <Image source={require('../../../assets/images/v.png')} style={styles.image} onPress = {()=>{}}/>
                <Text style={styles.freeText2}>Yes, I'm willing to share my diary</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.TouchableOpacity}>
                <Image source={require('../../../assets/images/calendar_icon.png')} style={styles.image} onPress = {()=>{}}/>
                <Text style={styles.freeText2}>I would like to change my schedule before</Text>
            </TouchableOpacity>    
            
            <TouchableOpacity style = {styles.TouchableOpacity}>
                <Image source={require('../../../assets/images/x.png')} style={styles.image} onPress = {()=>{}}/>
                <Text style={styles.freeText2}>No, Reject the invitation</Text>
            </TouchableOpacity>



            </ScrollView>

        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#607d8b',
        height:'100%'
    },
    TouchableOpacity: {
        flex:1,
        flexDirection:'row-reverse',
        marginVertical:10,
        borderBottomWidth:3,
        borderBottomColor:'white',
    },
    image: {
        height:30,
        width:30,
        marginRight: 15,
        alignSelf:'center'
    },
    freeText1: {
        fontWeight:'bold',
        fontSize:30,
        marginVertical:10,
        marginHorizontal:10,
        color:'white',
        textAlign:'right',
    },
    freeText2: {
        fontWeight:'bold',
        fontSize: 20,
        marginVertical: 20,
        marginHorizontal: 10,
        color:'white',
        alignSelf:'center',
        

    },
    freeText: {
        fontWeight:'bold',
        fontSize: 23,
        marginVertical: 10,
        color:'white',
        backgroundColor:'#375360',
        paddingLeft:10,
        flex:1,
    },
    projName: {
        fontWeight:'bold',
        fontSize: 35,
        marginVertical: 10,
        paddingLeft:10,
        color:'#40b1bf',
        backgroundColor:'#375360',
        flex:1,
    },
    text: {
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left',
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886'
    },
});

export default ProjectInvitation;