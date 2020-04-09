import React from 'react';
import {View, StyleSheet,Text, Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import * as Animatable from 'react-native-animatable';


const LogInScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/schedjWhiteTry.png')} style={styles.whiteHeadr}/>
            <View style={styles.container}>
            <Text style={{fontSize:25,color:'white',textAlign:'center'}}>Ola Leocito ! Daddi and Mommy       is here sweatHeart</Text>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center',fontSize:70 }}>❤️</Animatable.Text>
                <Image source={require('../../../assets/images/pp.png')} style={styles.backgroundimage}/>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('OpenS')}>
                    <Image source={require('../../../assets/images/loginWith.png')} style={styles.loginWith}/>
                </TouchableOpacity>
                {/* <GoogleSignInButton/> */}
            </View>
        </View>
    );
};


// make it work!!! should be home page button for all screens

// LogInScreen.navigationOptions = ({navigation}) => {
//     return{
//         headerRight:(  
//         <TouchableOpacity onPress = {()=>navigation.navigate('Projects')}>
//              <Text> adasdasdas </Text>
//         </TouchableOpacity>)  
      
//     };
// };



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
        height:100,
        width:300,
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
});

export default withNavigation(LogInScreen);