import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const IndexDetail = ({navigation, imageSrc, navigationScreen, project}) => {

    return (
        <View style={{flexDirection:'column'}}>
            <TouchableOpacity style = {styles.TouchableOpacity} onPress = {() => navigation.navigate(navigationScreen,{project})}>
                <Image source = {imageSrc} style={styles.image}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    TouchableOpacity: {
        marginRight:10,
    },
    image: {
        height:47,
        width:47,
        marginHorizontal:1
    }
});

export default withNavigation(IndexDetail);