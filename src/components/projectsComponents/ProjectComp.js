import React,{useState} from 'react'
import { Text, StyleSheet, View  } from 'react-native'
import {withNavigation} from 'react-navigation';
import ProjectStatus from './ProjectStatus';
import IndexDetail from './IndexDetail';

const ProjectComponent = ({navigation,pid}) => {
    const[Pid,setPid] = useState(pid);

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.text}>{Pid}</Text>
                <View style={styles.options}>
                    <IndexDetail imageSrc = {require('../../../assets/images/meeting_logo.png')} navigationScreen= 'Meetings' pid={Pid}/>
                    <IndexDetail imageSrc={require('../../../assets/images/calendar_icon.png')} navigationScreen= 'Calendar' pid={Pid}/>
                    <IndexDetail imageSrc={require('../../../assets/images/edit_logo.png')} navigationScreen= 'EditP' pid={Pid}/>
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
        borderBottomWidth:1,
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
    image: {
        height:50,
        width:50
    }
});

export default withNavigation(ProjectComponent);