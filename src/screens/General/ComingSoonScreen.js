import React from 'react'
import { View,ScrollView,StyleSheet,Text,Image,TouchableOpacity } from 'react-native'


const ComingSoonScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Gantt')}>
                <Text style={styles.text}>Gantt</Text>
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
        backgroundColor: '#607d8b',
    },
    TouchableOpacity: {
        backgroundColor:'#375360',
        flexDirection:'row-reverse',
        paddingLeft:3,
    },
    text: {
        fontSize:30,
        color:'oldlace',
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