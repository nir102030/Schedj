import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const IndexDetail = ({navigation, imageSrc, navigationScreen, project}) => {
    const id = project.id;
    return (
        <View style={{flexDirection:'column'}}>
            <TouchableOpacity style = {styles.TouchableOpacity} onPress = {() => navigation.navigate(navigationScreen,{id})}>
                <Image source = {imageSrc} style={styles.image}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    TouchableOpacity: {
        marginRight:10
    },
    image: {
        height:50,
        width:50,
        marginHorizontal:1
    }
});

export default withNavigation(IndexDetail);