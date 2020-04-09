import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';

const AboutUsScreen = () => {

    return (
            <View style={styles.container}>
                <Image source={require('../../../assets/images/AboutTryD.png')} style={styles.image}/>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#d9d9d9',
        height:'100%',
        width:'100%',
    },
    image: {
        height:'100%',
        width:'100%',
        paddingBottom:20,
        alignSelf:'center'
    },
});

export default AboutUsScreen;