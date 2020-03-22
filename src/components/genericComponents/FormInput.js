import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FormInput = ({title, value, onChange, viewStyle}) => {
    return(
            <View style={viewStyle}>
                <Text style={styles.text}>{title}: </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={value}
                    value
                    onChangeText= {onChange}
                />
            </View>
    );
};

const styles = StyleSheet.create({
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
        borderRadius:5
    }
});

export default FormInput;
