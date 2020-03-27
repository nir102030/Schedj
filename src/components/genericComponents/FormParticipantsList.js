import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import DialogInput from '../../../node_modules/react-native-dialog-input';

const FormParticipantsList = ({initialList}) => {
    const [listValues, setListValues] = useState(initialList);
    const [addValue,setAddValue] = useState(false);

    const submitHandler = (input)=> {
        const newList = [...listValues,input];
        input==''? setListValues(listValues):
        setListValues(newList);
        setAddValue(false);
    }

    function Item({ listValue }) {
        return (
          <View >
            <Text style={styles.item}>{listValue}</Text>
          </View>
        );
    }

    return (
        <View style={styles.participants}>
            <View style={styles.allinonerow} >
                <TouchableOpacity style= {styles.button}  onPress = {()=>setAddValue(true)}>
                    <Text style = {styles.addMatesButton}>Add Participants</Text>
                </TouchableOpacity>
                <DialogInput 
                    isDialogVisible = {addValue} 
                    title = {'Add Participant'}
                    submitInput = {(input)=>submitHandler(input)}
                    closeDialog={()=>{setAddValue(false)}}
                />
                <Text style={styles.addMates}>Participants: </Text>
            </View>
            <FlatList
                data = {listValues}
                keyExtractor = {(listValue)=> listValue}
                renderItem = {({item})=><Item style={styles.item} listValue={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        fontSize: 20,
        marginRight: 10,
        marginBottom:5,
        fontWeight:'bold',
        color:'#b3d4e5',
    },
    participants:{
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
        marginVertical: 5,
    },
    allinonerow:{
        flexDirection: 'row',
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
    },
    addMatesButton:{
        fontSize: 16,
        marginRight: 10,
        marginTop:8,
        marginBottom:10,
        fontWeight:'bold',
        color: 'black'
    },
    addMates:{
        fontSize: 22,
        marginRight: 10,
        marginTop:8,
        marginBottom:5,
        fontWeight:'bold',
    }
});

export default FormParticipantsList;