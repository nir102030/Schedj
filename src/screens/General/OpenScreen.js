import React from 'react';
import {View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const OpenScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/schedjWhiteTry.png')} style={styles.whiteHeadr}/>
            <View style={styles.container}>
                <Image source={require('../../../assets/images/gif.png')} style={styles.backgroundimage}/>
                <Image source={require('../../../assets/images/smallHeader.png')} style={styles.smallHeader}/>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/goSchedjTry.png')} style={styles.image}/>
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
        flex:1,
        alignSelf:'center'
    },
    backgroundimage: {
        height: 700,
        width:420,
        flex:1,
        alignSelf:'center',  
    },
    smallHeader: {
        height:150,
        width:430,
        alignSelf:'center',
        backgroundColor:'#749699',  
    },
    image: {
        height:120,
        width:220,
        marginRight:15
    },
    whiteHeadr: {
        height:120,
        width:350,
        alignSelf:'center',
        marginVertical:15
    },
});

export default withNavigation(OpenScreen);