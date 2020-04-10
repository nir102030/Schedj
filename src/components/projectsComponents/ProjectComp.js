import React,{useState} from 'react'
import { Text, StyleSheet, View, TouchableOpacity,Alert,TouchableHighlight,Image} from 'react-native'
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';
import {AntDesign} from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable-row';
import AwesomeAlert from 'react-native-awesome-alerts';
import {withNavigation} from 'react-navigation';


const ProjectComp = ({project, deleteProject,navigation}) => {

    {/* add pop-up: Delete project - You won't be able to restore your project! yes or no  */}

    // const Alert = () => {
    //     Alert.alert(
    //         'Are you sure you want to delete this item?', 
    //         '',
    //         [
    //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
    //         {text: 'OK', onPress: () => deleteProject(project)}
    //         ],
    //         { cancelable: false }
    //     )
    // };

    const [showAlert,setShowAlert] = useState(false);

    const showAlertMessage = () => {
        setShowAlert(true);
       
    };
    
    const hideAlertMessage = () => {
        setShowAlert(false);
    };
   
    const rightButtons = [
        <TouchableHighlight>
            <TouchableOpacity style = {styles.TouchableOpacityLeft} onPress = {showAlertMessage}>
                <Image source={require('../../../assets/images/delete.png')} style={styles.image}/>
            </TouchableOpacity> 
        </TouchableHighlight>
    ];
    const leftButtons = [
        <TouchableHighlight>
            <TouchableOpacity style = {styles.TouchableOpacityRight} onPress = {() => navigation.navigate('EditP',{project})}>
                <Image source = {require('../../../assets/images/edit_logoTry.png')} style={styles.image}/>
            </TouchableOpacity>
        </TouchableHighlight>
    ];


    return (
        <View style={styles.asd}>
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
                    <ProjectStatus style={styles.status}/>
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
    asd: {
        borderBottomWidth:3,
        borderColor:'#d9e3f0',
    },
    container: {
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        paddingBottom:20,
    },
    TouchableOpacityLeft:{
        marginVertical:20,
        paddingBottom:3,
        marginHorizontal:25,
        paddingTop:3,
        paddingHorizontal:5,
        borderRadius:10,
        backgroundColor:'white',
        //borderRadius:10    
    },
    TouchableOpacityRight:{
        marginVertical:20,
        paddingBottom:3,
        marginHorizontal:25,
        paddingTop:3,
        paddingHorizontal:5,
        borderRadius:10,
        backgroundColor:'white',
        paddingRight:50
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
        width:40,
    }
    // status:{
    //     paddingRight:20
    // }
});

export default withNavigation(ProjectComp);