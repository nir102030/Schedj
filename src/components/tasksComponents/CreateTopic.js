import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Image, StyleSheet} from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import DialogInput from '../../../node_modules/react-native-dialog-input';

const CreateTopic = ({addTopic, project, style}) => {
    const [showDialog,setShowDialog] = useState(false);
    
    const addNewTopic = (input)=>{
        const topic = {pid: project.id, name: input};
        addTopic(topic);
        setShowDialog(false);
    }

    return (
        <View>
            <DialogInput 
                isDialogVisible = {showDialog} 
                title = {'Topic Name'}
                submitInput = {(input)=>addNewTopic(input)}
                closeDialog={()=>{setShowDialog(false)}}
            />
            <TouchableOpacity style = {style}  onPress ={() => setShowDialog(true)}>
                <Image source={require('../../../assets/images/addTopic.png')} style={styles.image}/>
                <Text style={styles.text}>  Add a New Topic</Text>
            </TouchableOpacity>
        </View>   
    );
};


const styles = StyleSheet.create({
    image: {
        height:37,
        width:37,
        marginRight: 15,
        alignSelf:'center'
    },
    text: {
        fontSize:20,
        color:'oldlace',
        alignSelf:'center',
        fontWeight:'bold',
        marginVertical:12,
    },
});

export default connect(null,actions)(CreateTopic);
