import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'
import Spacer from '../../components/genericComponents/Spacer'

const ComingSoonScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.TouchableOpacity}  onPress = {()=>navigation.navigate('Gantt')}>
                <Text style={styles.text}>Gantt</Text>
            </TouchableOpacity>
            <Spacer/>

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