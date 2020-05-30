import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

const MeetingInvitation = ({Owner,pid}) => {

    return (
        <View style = {styles.container}>
            <Text style={styles.Hello}>Hello {Owner}</Text>
            <Text style={styles.Text}>New meeting has been scheduled! </Text>
            <Text style={styles.projName}>{pid}Project</Text>
            <TouchableOpacity style = {styles.TouchableOpacity}>
                <Text style={styles.Text2}> Check it out here !!</Text>
            </TouchableOpacity>   
            <Image source={require('../../../assets/images/schedjTry.png')} style={styles.schedj}/> 
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#e8f1f9',
        height:'100%'
    },
    Hello: {
        fontWeight:'bold',
        fontSize:30,
        marginVertical:10,
        marginHorizontal:10,
        color:'#263238',
        textAlign:'right',
    },
    Text: {
        fontSize: 23,
        marginVertical: 10,
        color:'#263238',
        paddingLeft:10,
    },
    projName: {
        fontWeight:'bold',
        fontSize: 35,
        marginVertical: 10,
        paddingLeft:10,
        color:'#263238',
    },
    TouchableOpacity: {
        backgroundColor:'#a1cfd5',
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