import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const AboutUsScreen = () => {

    return (
            <View style={styles.container}>
                <Image source={require('../../../assets/images/AboutTry.png')} style={styles.image}/>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
    },
    TouchableOpacity: {
        backgroundColor:'#2b414b',
        flex:1,
        flexDirection:'row-reverse'
    },
    image: {
        height:730,
        paddingBottom:20,
        width:510,
        alignSelf:'center'
    },
    text: {
        fontSize:20,
        color:'oldlace',
        alignSelf:'center',
        fontWeight:'bold',
    }
});

export default AboutUsScreen;