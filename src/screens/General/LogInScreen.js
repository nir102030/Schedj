import React from 'react';
import {View, StyleSheet,Text, Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import * as Animatable from 'react-native-animatable';


const LogInScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/schedjWhiteTry.png')} style={styles.whiteHeadr}/>
            <View style={styles.container}>
            <Text style={{fontSize:25,color:'white',textAlign:'center'}}>ירוק עולה</Text>
            <Text style={{fontSize:25,color:'white',textAlign:'center'}}>כץ עם הכדור מוסר לסימוני רואה את ינוקא ברחבה מרים את הכדור וזה בקורה...נגיחה וזה ברשת....כץ מנצח את המשחק בדקה ה90 היסטוריה ...</Text>
                <Image source={require('../../../assets/images/haifa.png')} style={styles.backgroundimage}/>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('OpenS')}>
                    <Image source={require('../../../assets/images/loginWith.png')} style={styles.loginWith}/>
                </TouchableOpacity>
                {/* <GoogleSignInButton/> */}
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
        height:100,
        width:300,
        flex:1,
        alignSelf:'center',
        borderRadius:35 
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