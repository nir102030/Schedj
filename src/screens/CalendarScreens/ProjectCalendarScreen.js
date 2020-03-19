import React from 'react'
import {Text, StyleSheet, View,ImageBackground } from 'react-native'
import ApiCalendar from 'react-google-calendar-api';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {withNavigation} from 'react-navigation';

const ProjectCalendarScreen = ({navigation}) => {
    const project = navigation.getParam('project');
    return <View style = {styles.container}>
            <Text style={styles.text}>{project} project calendar</Text>
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
        backgroundColor:'lightslategrey',
        height:'100%'
    },
    text: {
        fontWeight:'bold',
        fontSize: 24,
        alignSelf:'center',
        marginBottom:10,
        marginTop:5,
        color:'oldlace'
    },
});

export default withNavigation(ProjectCalendarScreen);
