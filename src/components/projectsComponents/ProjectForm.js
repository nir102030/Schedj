import React, {useState} from 'react';
import {Text, StyleSheet, View, Image,ScrollView} from 'react-native';
import FormInput from '../genericComponents/FormInput';
import FormParticipantsList from '../genericComponents/FormParticipantsList';
import FormSubmitButton from '../genericComponents/FormSubmitButton'; 



const ProjectForm = ({oldProject, onSubmit}) => {
    const [project,setProject] = useState(oldProject);

    const handleNoteList = (note, index) => {
        const newNotes = [...project.notes];
        newNotes[index] = note;
        setProject({...project, "notes":newNotes});
    }

    return (
            <View style= {styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.text}>{project.name}</Text>
                        <Image source={require('../../../assets/images/project.png')} style={styles.image}/>
                    </View>
                    <ScrollView>
                        <Text  style={styles.fillRequired}>Please fill the required fields </Text>
                        <FormInput 
                            title='Project Name:' 
                            value = {project.name} 
                            onChange={(name) => setProject({...project, "name":name})} 
                            viewStyle = {styles.projectName}
                        />
                        <FormParticipantsList 
                            participants = {project.participants} 
                            setParticipant = {(participants) => setProject({...project, "participants": participants})}
                        />
                        <FormInput 
                            title='Min Participants For Meeting:' 
                            value={project.minForMeeting} 
                            onChange = {(minForMeeting) => setProject({...project, "minForMeeting": minForMeeting})} 
                            viewStyle = {styles.minMeet}
                        /> 
                        <FormInput 
                            title='Reminder Before Meeting:' 
                            value={project.reminder} 
                            onChange = {(reminder) => setProject({...project, "reminder":reminder})} 
                            viewStyle = {styles.minMeet}
                        /> 
                        <Text  style={styles.note}>   Write your notes here!  </Text>
                        <FormInput 
                            title='1.' 
                            value = {project.notes[0]} 
                            onChange={(note) => handleNoteList(note,0)} 
                            viewStyle = {styles.notes}
                        />
                        <FormInput 
                            title='2.' 
                            value = {project.notes[1]} 
                            onChange={(note) => handleNoteList(note,1)} 
                            viewStyle = {styles.notes}
                        />
                        <FormInput 
                            title='3.' 
                            value = {project.notes[2]} 
                            onChange={(note) => handleNoteList(note,2)} 
                            viewStyle = {styles.notes}
                        />
                        <Text  style={styles.task}>   *Define your tasks later  </Text>
                        <FormSubmitButton onSubmit = {() => onSubmit(project)}/>
                    </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#607d8b',
        height:'100%'
    },
    header:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
    },
    text:{
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },
    image:{
        marginVertical:10,
        height:60,
        width:60,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        marginHorizontal:10
    },
    fillRequired: {
        backgroundColor:'red',        
        flex:1
    },
    projectName: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',   
    },
    minMeet: {
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor:'#d9e3f0',  
        marginBottom:10 
    },
    note: {
        alignSelf:'center',
        fontWeight:'bold',
    },
    notes: {
        flexDirection: 'row',
    }, 
    task:{
        marginTop: 20,
        fontWeight:'bold',
        color:'#194d33'
    },
});


export default ProjectForm;
