import React from 'react';
import {View, StyleSheet,Text, Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import * as Animatable from 'react-native-animatable';


const LogInScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/schedjWhiteTry.png')} style={styles.whiteHeadr}/>
            <View style={styles.container}>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('OpenS')}>
                    <Image source={require('../../../assets/images/loginWith.png')} style={styles.loginWith}/>
                </TouchableOpacity>
                {/* <GoogleSignInButton/> */}
            </View>
        </View>
    );
};

LogInScreen.navigationOptions = () => { 
    return{ headerRight:   
            <View>
                <Text style={styles.headerStyle}> Schedj </Text>
            </View>
    };
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
    loginWith: {
        height:200,
        width:450,
        marginVertical:28,
        marginRight:30,
    },
    whiteHeadr: {
        height:120,
        width:350,
        alignSelf:'center',
        marginVertical:15
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

export default withNavigation(LogInScreen);