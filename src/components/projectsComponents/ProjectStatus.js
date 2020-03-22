import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,Image} from 'react-native';
import DialogInput from '../../../node_modules/react-native-dialog-input';

const ProjectStatus = ({project,style}) => {
    const [status, setStatus] = useState('Waiting');

    return (
        <View style={styles.container}>
            <View style={{alignSelf:'center',marginLeft:5,marginRight:5}}>
                <Text style={{fontSize:18,color:'oldlace',fontWeight:'bold'}}>Status</Text>
                <Text style={{fontSize:14}}>{status}</Text>
            </View>
            <TouchableOpacity style={{alignSelf:'center'}} onPress = {() => {()=>{}}}>
                <Image style={styles.statusStyle}  source={require('../../../assets/images/status.png')} style={{height:30,width:30}}/>
            </TouchableOpacity>
        </View>

    );
};
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flexDirection:'row-reverse'
    },
    statusStyle:{

    }
});


export default ProjectStatus;
