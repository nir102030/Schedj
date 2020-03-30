import React from 'react'
import {Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation';


const TaskComp = ({navigation,id, pid}) => {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>{id}</Text>
        </View>    
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
    },
    tasks: {
        marginHorizontal: 10,
    },
    text: {
        marginVertical: 10,
        marginHorizontal: 10,
        height: 30,
        fontWeight:'bold',
        fontSize: 24,
        color:'#263238',
        flex:1,
        flexDirection:'row-reverse'
    }, 
    inside:{
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight:'bold',
        color:'black'  
    },
    TouchableOpacity: {
        backgroundColor:'white',
        flex:1,
        flexDirection:'row-reverse',
        alignSelf:'center',
    },
    image: {
        height:50,
        width:50,
        marginRight: 15,
        alignSelf:'center'
    },
    Date:{
        backgroundColor:'#607d8b',
        marginHorizontal: 10,
        height: 60,
        fontWeight:'bold',
        fontSize: 20,
        color:'black'
    },
});

export default withNavigation(TaskComp);