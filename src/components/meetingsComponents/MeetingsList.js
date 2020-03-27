import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList,Image,ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import MeetingComp from './MeetingComp';

const MeetingsList = ({style, pid}) => {
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
        <View >
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.text}>{pid} Project Meetings</Text>
                    <Image source={require('../../../assets/images/meeting_logo.png')} style={styles.image}/>
                </View>
                <FlatList
                    data = {meetingsList}
                    keyExtractor={(meeting)=> meeting}
                    renderItem= {({item}) => <Item id={item}/>}  
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        padding:3,
        marginVertical: 10
    },
    header:{
        flexDirection:'row', 
        flexWrap:'wrap',
        borderBottomWidth:5,
        borderBottomColor:'#2d6886',
        backgroundColor:'#8aa9b9',
    },
    text:{
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#263238',
    },
    image:{
        marginVertical:10,
        height:60,
        width:60,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center'
    }
});

export default withNavigation(MeetingsList);