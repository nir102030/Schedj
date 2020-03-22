import React from 'react';
import {View, Text, StyleSheet,Image,TextInput,ScrollView} from 'react-native';
import FormDatePicker from '../../components/genericComponents/FormDatePicker';

const CreateMeetingScreen = ({id, pid}) => {

        return (
                <View style={styles.container}> 
                    <View style={styles.header}>
                        <Text style={styles.text}>-     Meeting {id} </Text>
                        <Text style={styles.text}>Project {pid}</Text>
                    </View>
                    <ScrollView> 
                        <Text style={styles.fill}>Please fill the required fields </Text>
                        <View style={styles.viewStyle}>
                            <FormDatePicker/>
                            <Text style={styles.input}>Date:</Text> 
                        </View>
                        <View style={styles.viewStyle}>
                            <TextInput  style={styles.realInput}
                            placeholder="##:##"/>    
                            <Text style={styles.input}> Till  </Text> 
                            <TextInput  style={styles.realInput}
                            placeholder="##:##"/>            
                            <Text style={styles.input}>Hours: </Text> 
                        </View>
                        <View style={styles.viewStyle}>
                            <TextInput  style={styles.realInput}
                            placeholder="Enter Place"/>            
                            <Text style={styles.input}>Place of meeting: </Text> 
                        </View>
                        <View style={styles.viewStyle}>
                            <TextInput  style={styles.realInput}
                            placeholder= "Find your friends"/>            
                            <Text style={styles.input}>Participants: </Text> 
                        </View>
                        <Text style={styles.notes}>Notes: </Text> 
                        <View>
                            <TextInput  style={styles.viewStyle1}
                            placeholder= ".1."/> 
                        </View>
                        <View>
                            <TextInput  style={styles.viewStyle1}
                            placeholder= ".2."/> 
                        </View>
                        <View>
                            <TextInput  style={styles.viewStyle1}
                            placeholder= ".3."/> 
                        </View>
                        <Image style={styles.image} source={require('../../../assets/images/create.png')}/>
                    </ScrollView>
                </View>
        );
};

    const styles = StyleSheet.create({
        container: {
            backgroundColor:'lightslategrey',        
            flex:1
        },
        fill: {
            backgroundColor:'red',        
            flex:1
        },
        header: {
            flexDirection: 'row',
            backgroundColor:'#455a64',
        },
        image: {
            marginVertical: 100
        },
        input: {
            marginVertical: 20,
            marginHorizontal:10,
            fontWeight:'bold',
            fontSize: 22,
            color:'black',
            flex:1
        },  
        realInput: {
            backgroundColor: '#455a64',
            marginVertical: 20,
            marginHorizontal:10,
            fontWeight:'bold',
            fontSize: 20,
            color:'black',
            textAlign: 'center',
            flex:1
        },
        notes: {
            marginVertical: 5,
            marginHorizontal:10,
            fontWeight:'bold',
            fontSize: 22,
            color:'black',
            alignSelf:'flex-end',
        },  
        note: {
            marginVertical: 10,
            marginHorizontal:10,
            fontSize: 20,
            color:'black',
            alignSelf:'flex-end',
            flex:1
        },  
        viewStyle: {
            flexDirection: 'row',
            borderBottomWidth: 3,
            borderBottomColor:'#d9e3f0',
        }, 
        viewStyle1: {
            marginVertical: 2,
            flexDirection: 'row',
            marginHorizontal:20,
            fontWeight:'bold',
            alignSelf:'flex-end',
            fontSize: 20
        }, 
        text: {
            marginVertical: 20,
            marginHorizontal: 10,
            height: 30,
            fontWeight:'bold',
            fontSize: 22,
            color:'oldlace',
            
        }, 
        Date:{
            marginHorizontal: 5,
            height: 60,
            fontWeight:'bold',
            fontSize: 22,
            color:'black'
        },
        texta: {
            fontSize: 20,
            marginTop: 10
        },
        button: {
            backgroundColor: "#4EB151",
            paddingVertical: 11,
            paddingHorizontal: 17,
            borderRadius: 3,
            marginVertical: 50
        },
        buttonText: {
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "600"
        }
    });

export default CreateMeetingScreen;