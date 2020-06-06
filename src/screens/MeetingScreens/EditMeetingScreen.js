import React from 'react';
import MeetingForm from '../../components/meetingsComponents/MeetingForm';
import { Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import { editMeetingInDb } from '../../firebase/meetingsAPI';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const EditMeetingScreen = ({ navigation, editMeeting }) => {
	const meeting = navigation.getParam('meeting');
	const project = navigation.getParam('project');

	const onSubmit = (meeting) => {
		editMeeting(meeting);
		editMeetingInDb(meeting);
		navigation.pop();
	};

	return <MeetingForm project={project} oldMeeting={meeting} onSubmit={(meeting) => onSubmit(meeting)} type="edit" />;
};

EditMeetingScreen.navigationOptions = ({navigation}) => { 
    return{ headerRight:   
            <View style={styles.navigator}>
                <Text style={styles.headerStyle}> Edit Meeting </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
    };
};

export default connect(null, actions)(EditMeetingScreen);

const styles = StyleSheet.create({
    home: {
		height: 35,
        width: 35,
        marginRight:10
    },
    navigator:{
        flexDirection: 'row',
    },
    headerStyle: { 
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 5,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },  
});
