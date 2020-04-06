import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity  } from 'react-native'
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';
import {AntDesign} from '@expo/vector-icons';

const ProjectComponent = ({project, deleteProject}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.text}>{project.name}</Text>
                <View style={styles.options}>   

                    {/* add pop-up: Delete project - You won't be able to restore your project! yes or no  */}
                    <TouchableOpacity style = {styles.TouchableOpacity} onPress = {() => deleteProject(project)}>
                        <AntDesign name = 'delete' size= {37}/>
                    </TouchableOpacity>  
                    <IndexDetail imageSrc={require('../../../assets/images/edit_logo.png')} navigationScreen= 'EditP' project={project}/>
                    <IndexDetail imageSrc={require('../../../assets/images/taskTry.png')} navigationScreen= 'Tasks' project={project}/>
                    <IndexDetail imageSrc={require('../../../assets/images/meetingTry.png')} navigationScreen= 'Meetings' project={project}/>
                    <IndexDetail imageSrc={require('../../../assets/images/calendarTry.png')} navigationScreen= 'Calendar' project={project}/>               
                </View>
            </View>
           
            <ProjectStatus style={styles.status}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        borderBottomWidth:3,
        borderColor:'white',
        paddingBottom:20,
    },
    TouchableOpacity:{
        alignSelf:'center',
        marginHorizontal:5,
        borderRadius:10    
    },
    text: {
        fontWeight:'bold',
        fontSize: 20,
        color:'oldlace',
        marginBottom:10,
        marginRight:10
    },
    options:{
        flexDirection:'row',
    },
    // status:{
    //     paddingRight:20
    // }
});

export default ProjectComponent;