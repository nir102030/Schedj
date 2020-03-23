import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const FormSubmitButton = ({onSubmit}) => {
    return(
        <TouchableOpacity onPress = {onSubmit}>
            <Image 
                source={require('../../../assets/images/create.png')} 
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image:{
        marginVertical:20,
        height:100,
        width:150,
        borderRadius:5,
        alignSelf:'center'
    }
});

export default FormSubmitButton;
