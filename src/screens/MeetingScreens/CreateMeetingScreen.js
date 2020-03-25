import React,{useState} from 'react';
import {View, Text, StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import FormDatePicker from '../../components/genericComponents/FormDatePicker';
import FormInput from '../../components/genericComponents/FormInput';
import FormParticipantsList from '../../components/genericComponents/FormParticipantsList'; 

const CreateMeetingScreen = ({id, pid, onSubmit}) => {
    const [placeOfMeeting, setplaceOfMeeting] = useState('');
    const Pparticipants = ['Nir', 'Bar','Dor'];
    const [startHour,setStartHour]  = useState('');
    const [endHour,setEndHour]  = useState('');
    const [note1,setNote1]  = useState('');
    const [note2,setNote2]  = useState('');
    const [note3,setNote3]  = useState('');

    return (
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Text style={styles.headerStyle}>-  Meeting {id} </Text>
                    <Text style={styles.headerStyle}>Project{pid}</Text>
                </View>
                    <ScrollView> 
                        <Text  style={styles.fillRequired}>Please fill the required fields </Text>
                        <View style={styles.designSquare}>
                            <FormDatePicker/>
                            <Text style={styles.input}>Meeting Date:</Text> 
                        </View>
                        <Text style={styles.input}>Meeting Hours: </Text> 
                        <View style={styles.hours}>
                            <FormInput title=' To:  ' value = {endHour}  onChange={setEndHour}  viewStyle = {styles.meetDesign} />   
                            <FormInput title='From:' value = {startHour}  onChange={setStartHour}  viewStyle = {styles.meetDesign} />   
                        </View>
                        <FormInput title='Place Of Meeting:' value = {placeOfMeeting} onChange={setplaceOfMeeting} viewStyle = {styles.designSquare}/>
                        <FormParticipantsList initialList = {Pparticipants}/>
                        <Text  style={styles.note}>   Write your notes here!  </Text>
                        <FormInput title='1.' value = {note1} onChange={setNote1} viewStyle = {styles.notes}/>
                        <FormInput title='2.' value = {note2} onChange={setNote2} viewStyle = {styles.notes}/>
                        <FormInput title='3.' value = {note3} onChange={setNote3} viewStyle = {styles.notes}/>
                        <TouchableOpacity onPress = {onSubmit}>
                            <Image source={require('../../../assets/images/create.png')} style={styles.image}/>
                        </TouchableOpacity>                    
                    </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#607d8b',        
        flex:1
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886'
    },
    headerStyle: {        
    fontWeight:'bold',
    fontSize: 30,
    marginVertical: 10,
    marginHorizontal:34,
    alignSelf:'center',
    color:'#263238',
    textAlign:'left'
    },
    fillRequired: {
        backgroundColor:'red',        
        flex:1
    },
    note: {
        alignSelf:'center',
        fontWeight:'bold',
    },
    designSquare: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',
    }, 
    notes: {
        flexDirection: 'row',
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