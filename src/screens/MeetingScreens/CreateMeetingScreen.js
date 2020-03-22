import React,{useState} from 'react';
import {View, Text, StyleSheet,Image,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import FormDatePicker from '../../components/genericComponents/FormDatePicker';
import FormInput from '../../components/genericComponents/FormInput';
import FormParticipantsList from '../../components/genericComponents/FormParticipantsList'; 


const CreateMeetingScreen = ({id, pid, onSubmit}) => {
    const [placeOfMeeting, setplaceOfMeeting] = useState('');
    const [note,setNote]  = useState('');
    const Pparticipants = ['Nir', 'Bar'];
    const [hour,setHour]  = useState('');




    return (
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Text style={styles.text}>-     Meeting {id} </Text>
                    <Text style={styles.text}>Project {pid}</Text>
                </View>
                <ScrollView> 
                    <Text  style={styles.fill}>Please fill the required fields </Text>
                    <View style={styles.viewStyle}>
                        <FormDatePicker/>
                        <Text style={styles.input}>Meeting Date:</Text> 
                    </View>
                    <Text style={styles.input}>Meeting Hours: </Text> 
                    <View style={styles.hours}>
                        <FormInput 
                            title=' To:  ' 
                            value = {hour} 
                            onChange={setHour} 
                            viewStyle = {styles.viewStyle2}
                        />   
                        <FormInput 
                            title='From:' 
                            value = {hour} 
                            onChange={setHour} 
                            viewStyle = {styles.viewStyle2}
                        />              
                    </View>
                    <FormInput 
                        title='Place Of Meeting:' 
                        value = {placeOfMeeting} 
                        onChange={setplaceOfMeeting} 
                        viewStyle = {styles.viewStyle}
                    />
                    <FormParticipantsList initialList = {Pparticipants}/>
                    <FormInput title='1.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                    <FormInput title='2.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                    <FormInput title='3.' value = {note} onChange={setNote} viewStyle = {styles.viewStyle}/>
                    <TouchableOpacity onPress = {onSubmit}>
                                <Image 
                                    source={require('../../../assets/images/create.png')} 
                                    style={styles.image}
                                />
                    </TouchableOpacity>                    
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
            marginVertical: 50,
            height:100,
            width:150,
            borderRadius:10,
            alignSelf:'center'
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
        hours: {
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
        viewStyle2: {
            marginVertical: 2,
            flexDirection: 'row',
            fontWeight:'bold',
            fontSize: 20,
            flex: 1,
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