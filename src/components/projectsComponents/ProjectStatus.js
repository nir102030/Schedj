import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import DialogInput from '../../../node_modules/react-native-dialog-input';
import { showMessage, hideMessage } from "react-native-flash-message";


const ProjectStatus = ({project,style}) => {
    const [status, setStatus] = useState(['Waiting','Approved']);

    return (
        <View style={styles.top}>
            <View style={styles.container}>
                <View style={{marginLeft:5,marginRight:5}}>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold',paddingLeft:3}}>Status</Text>
                    <Text style={{fontSize:14,alignSelf:'center',paddingLeft:5,color:'#FCDC00',fontWeight:'bold',paddingBottom:2}}>{status[0]}</Text>
                </View>
                <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {showMessage({message: "Status: Waiting",description: "Not all members confirm the project invitation yet",type: "info",color:"black",backgroundColor:'#cfd8dc' })}}>
                    <Image style={styles.statusStyle}  source={require('../../../assets/images/status.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );  
};
const styles = StyleSheet.create({
    top:{
        paddingTop:35,
        
        
    },
    container:{
        flexDirection:'row-reverse',
        backgroundColor:'#607d8b',
        borderRadius:10,
        //paddingRight:30,
        alignSelf:'center',
        paddingRight:3
    },
    statusStyle:{
        width:25,
        height:25
    }
});


export default ProjectStatus;
