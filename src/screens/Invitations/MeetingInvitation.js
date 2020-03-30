import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

const MeetingInvitation = ({Owner,pid}) => {

    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>New Meeting Invitation </Text>
            </View>
            <Text style={styles.freeText1}>Hello {Owner}  </Text>
            <Text style={styles.freeText}>New meeting has been scheduled! </Text>
            <Text style={styles.projName}>{pid} Project</Text>

            <TouchableOpacity style = {styles.TouchableOpacity}>
                <Image source={require('../../../assets/images/calendar_icon.png')} style={styles.image} onPress = {()=>{}}/>
                <Text style={styles.freeText2}>Check it out</Text>
            </TouchableOpacity>   
            <Image source={require('../../../assets/images/schedjTry.png')} style={styles.schedj}/> 

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#607d8b',
        height:'100%'
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886'
    },
    text: {
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left',
        flex:1
    },
    TouchableOpacity: {
        backgroundColor:'#375360',
        flexDirection:'row-reverse',
        marginVertical:10,
    },
    image: {
        height:50,
        width:50,
        marginRight: 15,
        alignSelf:'center'
    },
    projName: {
        fontWeight:'bold',
        fontSize: 35,
        marginVertical: 10,
        paddingLeft:10,
        color:'#40b1bf',
        backgroundColor:'#375360',
    },
    freeText: {
        fontWeight:'bold',
        fontSize: 23,
        marginVertical: 10,
        color:'white',
        backgroundColor:'#375360',
        paddingLeft:10,
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
        fontSize: 30,
        marginVertical: 20,
        marginHorizontal: 10,
        color:'white',
        alignSelf:'center',
    },
    schedj: {
        height:370,
        width:370,
        borderRadius:30,
        alignSelf:'center'
    },
});

export default MeetingInvitation;