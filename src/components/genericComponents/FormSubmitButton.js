import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const FormSubmitButton = ({onSubmit, type}) => {
    const source = 
            type === 'create'
            ?require('../../../assets/images/create.png'):
            require('../../../assets/images/Update.png');
    return(
        <TouchableOpacity onPress = {onSubmit}>
            <Image 
                source={source}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image:{
        marginVertical:10,
        height:100,
        width:150,
        borderRadius:5,
        alignSelf:'center'
    }
});

export default FormSubmitButton;
