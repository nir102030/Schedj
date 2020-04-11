import React,{useState} from 'react'
import { Text, StyleSheet, View, TouchableOpacity,TouchableHighlight,Image} from 'react-native'
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';
import Swipeable from 'react-native-swipeable-row';
import AwesomeAlert from 'react-native-awesome-alerts';
import {withNavigation} from 'react-navigation';


const ProjectComp = ({project, deleteProject,navigation}) => {

    const [showAlert,setShowAlert] = useState(false);
    const showAlertMessage = () => { setShowAlert(true);   };
    const hideAlertMessage = () => { setShowAlert(false);  };

    const rightButtons = [
        <TouchableHighlight>
            <TouchableOpacity style = {styles.TouchableOpacityLeftSide} onPress = {showAlertMessage}>
                <Image source={require('../../../assets/images/delete.png')} style={styles.image}/>
            </TouchableOpacity> 
        </TouchableHighlight>
    ];

    const leftButtons = [
        <TouchableHighlight>
            <TouchableOpacity style = {styles.TouchableOpacityRightSide} onPress = {() => navigation.navigate('EditP',{project})}>
                {/* <Image source={require('../../../assets/images/edit_logoTry.png')} style={styles.image}/> */}
                <Text style={{fontWeight:'bold',fontSize:16}}>Edit</Text>
           </TouchableOpacity>
        </TouchableHighlight>
    ];

    return (
        <View style={styles.general}>
            <Swipeable  leftButtons={leftButtons} rightButtons={rightButtons} >
                <View style={styles.container}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>{project.name}</Text>
                        <View style={styles.options}>                              
                            <IndexDetail imageSrc={require('../../../assets/images/taskTry.png')} navigationScreen= 'Tasks' project={project}/>
                            <IndexDetail imageSrc={require('../../../assets/images/meetingTry.png')} navigationScreen= 'Meetings' project={project}/>
                            <IndexDetail imageSrc={require('../../../assets/images/calendarTry.png')} navigationScreen= 'Calendar' project={project}/>               
                        </View>
                    </View>
                    <ProjectStatus/>
                </View>
            </Swipeable>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Delete Project"
                message="Are you sure you want to delete this item?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    hideAlertMessage();
                }}
                onConfirmPressed={() => {
                    deleteProject(project);
                    hideAlertMessage();
                }}
            />
    </View>
    )
};

const styles = StyleSheet.create({
    general: {
        borderBottomWidth:3,
        borderColor:'#d9e3f0',
    },
    container: {
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        paddingBottom:20,
    },
    TouchableOpacityLeftSide:{
        marginVertical:20,
        paddingBottom:3,
        marginHorizontal:20,
        paddingTop:3,
        paddingHorizontal:5,
        borderRadius:10,
        backgroundColor:'white',
    },
    TouchableOpacityRightSide:{
        marginVertical:20,
        paddingBottom:12,
        marginHorizontal:20,
        paddingTop:12,
        paddingHorizontal:5,
        borderRadius:10,
        backgroundColor:'white',
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
        width:40,
    }
});

export default withNavigation(ProjectComp);