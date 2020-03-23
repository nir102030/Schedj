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
                    <Text style={styles.headerStyle}>-     Meeting {id} </Text>
                    <Text style={styles.headerStyle}>Project {pid}</Text>
                </View>
                <ScrollView> 
                    <Text  style={styles.fillRequired}>Please fill the required fields </Text>
                    <View style={styles.designSquare}>
                        <FormDatePicker/>
                        <Text style={styles.input}>Meeting Date:</Text> 
                    </View>
                    <Text style={styles.input}>Meeting Hours: </Text> 
                    <View style={styles.hours}>
                        <FormInput title=' To:  ' value = {hour}  onChange={setHour}  viewStyle = {styles.meetDesign} />   
                        <FormInput title='From:' value = {hour}  onChange={setHour}  viewStyle = {styles.meetDesign} />   
                    </View>
                    <FormInput title='Place Of Meeting:' value = {placeOfMeeting} onChange={setplaceOfMeeting} viewStyle = {styles.designSquare}/>
                    <FormParticipantsList initialList = {Pparticipants}/>
                    <FormInput title='1.' value = {note} onChange={setNote} viewStyle = {styles.designSquare}/>
                    <FormInput title='2.' value = {note} onChange={setNote} viewStyle = {styles.designSquare}/>
                    <FormInput title='3.' value = {note} onChange={setNote} viewStyle = {styles.designSquare}/>
                    <TouchableOpacity onPress = {onSubmit}>
                                <Image 
                                    source={require('../../../assets/images/create.png')} 
                                    style={styles.image}/>
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
    header: {
        flexDirection: 'row',
        backgroundColor:'#455a64',
    },
    headerStyle: {
        marginVertical: 20,
        marginHorizontal: 10,
        height: 30,
        fontWeight:'bold',
        fontSize: 22,
        color:'oldlace', 
    },
    fillRequired: {
        backgroundColor:'red',        
        flex:1
    },
    designSquare: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
    }, 
    input: {
        marginVertical: 20,
        marginHorizontal:10,
        fontWeight:'bold',
        fontSize: 22,
        color:'black',
        flex:1
    }, 
    hours: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
    },
    meetDesign: {
        marginVertical: 2,
        flexDirection: 'row',
        fontWeight:'bold',
        fontSize: 20,
        flex: 1,
    }, 
    image: {
        marginVertical: 50,
        height:100,
        width:150,
        borderRadius:10,
        alignSelf:'center'
    },
});

export default CreateMeetingScreen;