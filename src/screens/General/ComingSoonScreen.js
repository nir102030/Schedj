import React from 'react'
import { View,ScrollView,StyleSheet,Text,Image,TouchableOpacity } from 'react-native'


const ComingSoonScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Gantt')}>
                <Text style={styles.text}>1. Gantt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity}  onPress = {()=>navigation.navigate('')}>
                <Text style={styles.text}>.2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity}  onPress = {()=>navigation.navigate('')}>
                <Text style={styles.text}>.3</Text>
            </TouchableOpacity>
        </View>
    );
};

ComingSoonScreen.navigationOptions = () => { 
    return{ headerRight:   
            <View>
                <Text style={styles.headerStyle}> Coming Soon </Text>
            </View>
    };
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#e8f1f9',
       
    },
    TouchableOpacity: {
        backgroundColor:'#e8f1f9',
        flexDirection:'row-reverse',
        borderBottomWidth: 5,
		borderBottomColor: '#2d6886',
        paddingLeft:3,
    },
    text: {
        fontSize:30,
        color:'#263238',
        fontWeight:'bold',
        marginHorizontal:10,
        marginVertical:10
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

export default ComingSoonScreen