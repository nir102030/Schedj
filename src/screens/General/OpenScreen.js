import React from 'react';
import {View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const OpenScreen = ({navigation}) => {

    return (
            <View style={styles.container}>
                <Image source={require('../../../assets/images/OpenScreen.png')} style={styles.backgroundimage}/>
                <TouchableOpacity style = {styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/goSchedj.png')} style={styles.image}/>
                </TouchableOpacity>
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
        flexDirection:'row-reverse'

    },
    backgroundimage: {
        height:'100%',
        paddingBottom:20,
        width:'100%',
        alignSelf:'center'
    },
    image: {
        height:37,
        width:37,
        marginRight: 15,
        alignSelf:'center'
    },
});

export default withNavigation(OpenScreen);