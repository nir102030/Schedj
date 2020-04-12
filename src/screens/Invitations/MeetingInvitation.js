import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

const MeetingInvitation = ({Owner,pid}) => {

    return (
        <View style = {styles.container}>
            <Text style={styles.Hello}>Hello {Owner}  </Text>
            <Text style={styles.Text}>New meeting has been scheduled! </Text>
            <Text style={styles.projName}>{pid} Project</Text>
            <TouchableOpacity style = {styles.TouchableOpacity}>
                <Image source={require('../../../assets/images/calendar_icon.png')} style={styles.image} onPress = {()=>{}}/>
                <Text style={styles.Text2}>Check it out here !!</Text>
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
    Hello: {
        fontWeight:'bold',
        fontSize:30,
        marginVertical:10,
        marginHorizontal:10,
        color:'white',
        textAlign:'right',
    },
    Text: {
        fontSize: 23,
        marginVertical: 10,
        color:'white',
        paddingLeft:10,
    },
    projName: {
        fontWeight:'bold',
        fontSize: 35,
        marginVertical: 10,
        paddingLeft:10,
        color:'#40b1bf',
        backgroundColor:'#375360',
    },
    TouchableOpacity: {
        backgroundColor:'#5ca9b1',
        flexDirection:'row-reverse',
        marginVertical:10,
    },
    image: {
        height:50,
        width:50,
        marginRight: 15,
        alignSelf:'center'
    },
    Text2: {
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 20,
        marginHorizontal: 10,
        color:'white',
        alignSelf:'center',
    },
    schedj: {
        height:400,
        width:370,
        borderRadius:10,
        alignSelf:'center'
    },
});

export default MeetingInvitation;