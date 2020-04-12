import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';

const AboutUsScreen = () => {

    return (
            <View style={styles.container}>
                <Image source={require('../../../assets/images/AboutTryD.png')} style={styles.image}/>
            </View>
    );
};

AboutUsScreen.navigationOptions = () => { 
    return{ headerRight:   
            <View>
                <Text style={styles.headerStyle}> About Us </Text>
            </View>
    };
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
    headerStyle: { 
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 5,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },    
});

export default AboutUsScreen;