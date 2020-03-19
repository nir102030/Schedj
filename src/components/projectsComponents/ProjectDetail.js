import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import DialogInput from '../../../node_modules/react-native-dialog-input';

const ProjectDetail = ({parm,value,method}) => {
    const [listValues, setListValues] = useState(value);
    const [addValue,setAddValue] = useState(false);

    const submitHandler = (input)=>{
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
        method=='input'? 
        <View>
            <Text style={styles.text}>{parm}: </Text>
            <TextInput 
                style={styles.input} 
                placeholder={value}
            />
        </View>
        :
        <View>
            <Text style={styles.text}>{parm}: </Text>
            <FlatList
                data = {listValues}
                keyExtractor = {(listValue)=> listValue}
                renderItem = {({item})=><Item style={styles.item} listValue={item}/>}
            />
            <TouchableOpacity style= {styles.button}  onPress = {()=>setAddValue(true)}>
                <Text style = {{fontSize:20}}>Add {parm}</Text>
            </TouchableOpacity>
            <DialogInput 
                isDialogVisible = {addValue} 
                title = {'Add participant'}
                submitInput = {(input)=>submitHandler(input)}
                closeDialog={()=>{setAddValue(false)}}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:'100%'
    },

    header:{
        fontWeight:'bold',
        fontSize: 24,
        alignSelf:'center',
        color:'oldlace'
    },
    text:{
        fontSize: 22,
        marginRight: 5,
        marginTop:15,
        marginBottom:5
    },
    input: {
        fontSize: 18,
        marginRight: 5,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'white',
        borderRadius:5,
        marginLeft:150
    },
    item:{
        fontSize: 20,
        marginRight: 10,
        marginBottom:5,
        color:'oldlace'
    },
    button:{
        borderWidth:1,
        borderColor:'grey',
        backgroundColor:'gainsboro',
        alignSelf:'flex-end',
        borderRadius:5
    }
});


export default ProjectDetail;
