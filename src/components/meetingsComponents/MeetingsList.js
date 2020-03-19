import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';
import MeetingComp from './MeetingComp';

const MeetingsList = ({navigation,style, pid}) => {
    const meetingsList = ['1', '2', '3']
    const [meetings, setMeetings] = useState(meetingsList);

    function Item({ id }) {
        return (
          <View style={styles.item}>
            <MeetingComp id={id} pid= {pid}/>
          </View>
        );
    }
    return (
        <View style = {style}>
            <Text style={styles.text}>{pid} project meetings</Text>
            <FlatList
                data = {meetingsList}
                keyExtractor={(meeting)=> meeting}
                renderItem= {({item}) => <Item id={item}/>}  
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        padding:3,
        marginVertical: 10
    },
    text:{
        fontWeight:'bold',
        fontSize: 26,
        alignSelf:'center',
        color:'oldlace'
    }
});

export default withNavigation(MeetingsList);