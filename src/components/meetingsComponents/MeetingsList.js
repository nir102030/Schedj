import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList,Image,ScrollView} from 'react-native';
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
            <ScrollView>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={styles.text}>{pid} Project Meetings</Text>
                    <Image
                        source={require('../../../assets/images/meeting_logo.png')} 
                        style={styles.image}
                        />
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
    image:{
        marginVertical:20,
        height:70,
        width:70,
        borderRadius:5,
        marginRight: 15,
        alignSelf:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize: 30,
        marginVertical: 10,
        marginHorizontal:34,
        alignSelf:'center',
        color:'#FFFFFF'
    }
});

export default withNavigation(MeetingsList);