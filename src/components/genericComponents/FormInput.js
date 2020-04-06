import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FormInput = ({title, value, onChange, viewStyle,long}) => {
    return(
            <View style={viewStyle}>
                <TextInput style={styles.input} placeholder={value} value={value} onChangeText={onChange} maxLength={long}/>
                <Text style={styles.text}>{title} </Text> 
            </View>
        );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        marginRight: 10,
        marginTop:8,
        marginBottom:10,
        color:'white'
    },
    input: {
        marginTop:7,
        marginBottom:7,
        marginRight:5,
        marginLeft: 10,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'#b1c2ca',
        borderRadius:5,
        flex: 1,
        fontSize:16,
        fontWeight:'bold',
    }
});

export default FormInput;
