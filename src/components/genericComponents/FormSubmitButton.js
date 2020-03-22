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
        height:50,
        width:150,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center'
    }
});

export default FormSubmitButton;
