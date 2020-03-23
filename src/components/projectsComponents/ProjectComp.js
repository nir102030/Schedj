import React from 'react'
import { Text, StyleSheet, View  } from 'react-native'
import {withNavigation} from 'react-navigation';
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';

const ProjectComponent = ({project}) => {

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.text}>{project.name}</Text>
                <View style={styles.options}>
                    <IndexDetail imageSrc={require('../../../assets/images/edit_logo.png')} navigationScreen= 'EditP' project={project}/>
                    <IndexDetail imageSrc={require('../../../assets/images/Task.png')} navigationScreen= 'Task' project={project}/>
                    <IndexDetail imageSrc={require('../../../assets/images/meeting_logo.png')} navigationScreen= 'Meetings' project={project}/>
                    <IndexDetail imageSrc={require('../../../assets/images/calendar_icon1.png')} navigationScreen= 'Calendar' project={project}/>
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
        borderColor:'oldlace',
        paddingBottom:20
    },
    text: {
        fontWeight:'bold',
        fontSize: 20,
        color:'oldlace',
        marginBottom:10,
        marginRight:10
    },
    options:{
        flexDirection:'row'
    },
    TouchableOpacity: {
        marginRight:10
    },
});

export default withNavigation(ProjectComponent);