import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import DialogInput from '../../../node_modules/react-native-dialog-input';

const ProjectStatus = ({project,style}) => {
    const [status, setStatus] = useState('Waiting');

    return (
        <View style={styles.top}>
            <View style={styles.container}>
                <View style={{alignSelf:'center',marginLeft:5,marginRight:5}}>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>    Status</Text>
                    <Text style={{fontSize:14,alignSelf:'center',paddingLeft:15,color:'#FCDC00',fontWeight:'bold'}}>{status}</Text>
                </View>
                <TouchableOpacity style={{alignSelf:'center'}} onPress = {() => {()=>{}}}>
                    <Image style={styles.statusStyle}  source={require('../../../assets/images/status.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );  
};
const styles = StyleSheet.create({
    top:{
        paddingTop:40,
    },
    container:{
        flexDirection:'row-reverse',
        backgroundColor:'#507384',
        borderRadius:30,
        paddingRight:20,
        alignSelf:'center'
    },
    statusStyle:{
        width:30,
        height:30
    }
});


export default ProjectStatus;
