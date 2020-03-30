import React from 'react';
import {View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const OpenScreen = ({navigation}) => {
    

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/schedjWhiteTry.png')} style={styles.whiteHeadr}/>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/gif.png')} style={styles.backgroundimage}/>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('OpenS')}>
                    <Image source={require('../../../assets/images/loginWith.png')} style={styles.loginWith}/>
                </TouchableOpacity>
            
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor:'#3b687d',
    },
    TouchableOpacity: {
        flexDirection:'row-reverse',
        flex:1
    },
    backgroundimage: {
        height: 700,
        width:420,
        flex:1,
        alignSelf:'center',  
    },
    login: {
        height:120,
        width:450,
        alignSelf:'center',
        backgroundColor:'#749699',  
    },
    loginWith: {
        height:200,
        width:400,
        marginVertical:0,
        marginRight:30,
    },
    whiteHeadr: {
        height:120,
        width:350,
        alignSelf:'center',
        marginVertical:15
    },
});

export default withNavigation(OpenScreen);