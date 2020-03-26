import React from 'react'
import {Text, StyleSheet, View,ImageBackground,Button,Image } from 'react-native'
import ApiCalendar from 'react-google-calendar-api';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {withNavigation} from 'react-navigation';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

const ProjectCalendarScreen = ({navigation}) => {
    const project = navigation.getParam('project');
    return <View style = {styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>{project} Project Calendar </Text>
                    <Image source={require('../../../assets/images/calendar_icon1.png')} style={styles.image}/>
                </View>
            {/* <View>
                    <Button
                        onPress={() => {
                            showMessage({
                                message: "Simple message",
                                description: "Simple message",
                                type: "info",
                            });
                        }}
                        title="Color Details"
                        color="#841584"
                    />
            </View> */}

            <Calendar markedDates={{'2020-02-25':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-19':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-18':{selected: true, marked: true, selectedColor: 'orange'},
                                    '2020-02-16':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-09':{selected: true, marked: true, selectedColor: 'orange'},
                                    '2020-02-10':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-13':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-02':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-03':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-05':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-06':{selected: true, marked: true, selectedColor: 'orange'},
                                    '2020-02-17':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-23':{selected: true, marked: true, selectedColor: 'orange'},
                                    '2020-02-24':{selected: true, marked: true, selectedColor: 'green'},
                                    '2020-02-11':{selected: true, marked: true, selectedColor: 'red'},
                                    '2020-02-12':{selected: true, marked: true, selectedColor: 'red'},
                                    '2020-02-20':{selected: true, marked: true, selectedColor: 'red'},
                                    '2020-02-26':{selected: true, marked: true, selectedColor: 'red'},
                                    '2020-02-27':{selected: true, marked: true, selectedColor: 'red'},
                                    '2020-02-04':{selected: true, marked: true, selectedColor: 'red'},
                                    '2020-02-27':{selected: true, marked: true, selectedColor: 'red'}}}/>
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
    header: {
        flexDirection: 'row',
        backgroundColor:'#8aa9b9',
        justifyContent: 'flex-end',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886'
    },
});

export default withNavigation(ProjectCalendarScreen);
