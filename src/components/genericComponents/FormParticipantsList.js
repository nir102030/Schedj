import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DialogInput from '../../../node_modules/react-native-dialog-input';

const FormParticipantsList = ({participants, setParticipant}) => {
    const [showDialog,setShowDialog] = useState(false);

    const submitHandler = (input)=>{
        const newList = [...participants,input];
        input==''? setParticipant(participants):
        setParticipant(newList);
        setShowDialog(false);
    }

    function Item({ participants }) {
        return (
          <View >
            <Text style={styles.item}>{participants}</Text>
          </View>
        );
    }

    return (
        <View style={styles.participants}>
            <View style={styles.allinonerow} >
                <TouchableOpacity style= {styles.button}  onPress = {()=>setShowDialog(true)}>
                    <Text style = {styles.addMatesButton}>          Add Participants</Text>
                </TouchableOpacity>
                <DialogInput 
                    isDialogVisible = {showDialog} 
                    title = {'Add Participant'}
                    submitInput = {(input)=>submitHandler(input)}
                    closeDialog={()=>{setShowDialog(false)}}
                    />
                <Text style={styles.addMates}>Participants: </Text>
            </View>
            <FlatList
                data = {participants}
                keyExtractor = {(participants)=> participants}
                renderItem = {({item})=><Item style={styles.item} participants={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%'
    },
    allinonerow:{
        flexDirection: 'row',
    },
    participants:{
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
        marginVertical: 5,
    },
    addMates:{
        fontSize: 22,
        marginRight: 10,
        marginTop:8,
        marginBottom:5,
        fontWeight:'bold',
    },
    addMatesButton:{
        fontSize: 16,
        marginRight: 10,
        marginTop:8,
        marginBottom:10,
        fontWeight:'bold',
        color: 'black'
    },
    header:{
        fontWeight:'bold',
        fontSize: 24,
        alignSelf:'center',
        color:'oldlace'
    },
    item:{
        fontSize: 20,
        marginRight: 10,
        marginBottom:5,
        fontWeight:'bold',
        color:'#b3d4e5',
    },
    button:{
        marginTop:1,
        marginBottom:7,
        marginRight:5,
        marginLeft: 10,
        borderWidth:3,
        borderColor:'white',
        backgroundColor:'#b3d4e5',
        borderRadius:50,
        alignSelf:'center',
        flex: 1,
    }
});

export default FormParticipantsList;