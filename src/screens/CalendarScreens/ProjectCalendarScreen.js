import React from 'react'
import {Text, StyleSheet, View,ImageBackground,Button,Image,TouchableOpacity,ScrollView } from 'react-native'
//import ApiCalendar from 'react-google-calendar-api';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {withNavigation} from 'react-navigation';
import { showMessage, hideMessage } from "react-native-flash-message";

const ProjectCalendarScreen = ({navigation}) => {
    const project = navigation.getParam('project');
    return <View style = {styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>{project} Project Calendar </Text>
                    <Image source={require('../../../assets/images/calendar_icon1.png')} style={styles.image}/>
                </View>
            <ScrollView>
            <View style = {{flexDirection: 'row-reverse'}}>
                    <Button onPress={() => {showMessage({message: "Green",description: "Green-Available",type: "info",color:"black" });
                        }} title="Green" color="#388e3c"/>
                    <Button onPress={() => {showMessage({message: "Yellow",description: "Yellow-Waiting",type: "info",color:"black" });
                        }} title="Yellow" color="#fcc400"/>
                    <Button onPress={() => {showMessage({message: "Red",description: "Red-Scheduled",type: "info",color:"black" });
                        }} title="Red" color="#d32f2f"/> 
                    <Button onPress={() => {showMessage({message: "Grey",description: "Grey-Busy",type: "info",color:"black" });
                        }} title="Grey" color="#808080"/>                              
            </View>
            <Calendar />
            
                {/* the code below not going to be here in the future, just help to build the screens */}

                <TouchableOpacity style={styles.TouchableOpacity}  onPress = {()=>navigation.navigate('InviteP')}>
                    <Text style={styles.test}>New Project Invitation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity}  onPress = {()=>navigation.navigate('InviteM')}>
                    <Text style={styles.test}>New Meeting Invitation</Text>
                </TouchableOpacity>
            </ScrollView>
    </View>
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#607d8b',
        height:'100%'
    },
    image: {
        height:50,
        width:50,
        marginRight: 15,
        alignSelf:'center'
    },
    text: {
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left',
    },
    test: {
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'white',
        textAlign:'left',
    },
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886'
    },
    TouchableOpacity: {
        backgroundColor:'#2b414b',
        flex:1,
        flexDirection:'row-reverse'
    }
});

export default withNavigation(ProjectCalendarScreen);
