import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const HeaderC = () => {
 
};

export default HeaderC.navigationOptions = (props) =>{
    return{
        headerRight:   
                    <View style={styles.header}>
                        <Text style={styles.headerStyle}>{props.headerText}</Text>
                    </View>
    };
};

const styles  = StyleSheet.create({
    header: {
        flexDirection: 'row',
        //backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        // borderBottomWidth:5,
        // borderBottomColor:'#2d6886'
    },
    headerStyle: {        
        fontWeight:'bold',
        fontSize: 30,
        //marginVertical: 10,
        //marginHorizontal:34,
        marginRight: 15,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },
});
