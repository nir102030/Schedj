import React from 'react'
import {Text, StyleSheet, View } from 'react-native'

const ShowMeetingScreen = ({id, pid}) => {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>{pid} project, meeting {id}</Text>
        </View>    
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b'
    },
    text: {
        marginVertical: 20,
        marginHorizontal: 10,
        height: 60,
        fontWeight:'bold',
        fontSize: 22,
        color:'oldlace'
    }
});

export default ShowMeetingScreen;