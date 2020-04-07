import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity,TouchableHighlight,Image} from 'react-native'
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';
import {AntDesign} from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';


const ProjectComponent = ({project, deleteProject}) => {
    const rightButtons = [
        <TouchableHighlight style={{}}>
            <TouchableOpacity style = {styles.TouchableOpacity} onPress = {() => deleteProject(project)}>
            <Image source={require('../../../assets/images/delete.png')} style={styles.image}/>
            </TouchableOpacity> 
        </TouchableHighlight>
    ];
    const leftButtons = [
        <TouchableHighlight style={{}}>
            <TouchableOpacity style = {styles.TouchableOpacity} onPress = {() => deleteProject(project)}>
            <Image source={require('../../../assets/images/delete.png')} style={styles.image}/>
            </TouchableOpacity> 
        </TouchableHighlight>
    ];


{/* add pop-up: Delete project - You won't be able to restore your project! yes or no  */}

// const Alert = () => {
//     Alert.alert(
//         'Are you sure you want to delete this item?',                        
//         [
//           {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
//           {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//           {text: 'OK', onPress: () => deleteProject(project)},
//         ],
//         { cancelable: false }
//     )
// };

    return (
        <View style={styles.asd}>
            <Swipeable leftButtons={leftButtons} rightButtons={rightButtons} bounceOnMount={true} >
                <View style={styles.container}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>{project.name}</Text>
                        <View style={styles.options}>                              
                            <IndexDetail imageSrc={require('../../../assets/images/edit_logo.png')} navigationScreen= 'EditP' project={project}/>
                            <IndexDetail imageSrc={require('../../../assets/images/taskTry.png')} navigationScreen= 'Tasks' project={project}/>
                            <IndexDetail imageSrc={require('../../../assets/images/meetingTry.png')} navigationScreen= 'Meetings' project={project}/>
                            <IndexDetail imageSrc={require('../../../assets/images/calendarTry.png')} navigationScreen= 'Calendar' project={project}/>               
                        </View>
                    </View>
                    <ProjectStatus style={styles.status}/>
                </View>
            </Swipeable>
        </View>

    )
};

const styles = StyleSheet.create({
    asd: {
        borderBottomWidth:3,
        borderColor:'#d9e3f0',
    },
    container: {
        flexDirection:'row-reverse',
        justifyContent:'space-between',

        paddingBottom:20,
    },
    TouchableOpacity:{
        marginVertical:5,
        marginHorizontal:20,
        paddingTop:25,
        //borderRadius:10    
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
    image:{
        height:40,
        width:40

    }
    // status:{
    //     paddingRight:20
    // }
});

export default ProjectComponent;