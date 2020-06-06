import React from 'react';
import {View, StyleSheet, Image,Text,TouchableOpacity} from 'react-native';

const AboutUsScreen = () => {

    return (
            <View style={styles.container}>
                <Image source={require('../../../assets/images/AboutTryD.png')} style={styles.image}/>
            </View>
    );
};

AboutUsScreen.navigationOptions = ({navigation}) => { 
    return{ headerRight:   
            <View style={styles.navigator} >
                <Text style={styles.headerStyle}> About Us </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#e8f1f9',
        height:'100%',
        width:'100%',
    },
    navigator:{
        flexDirection: 'row',
    },
    home: {
		height: 35,
        width: 35,
        marginRight:10
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