import React from 'react';
import EventCalendar from 'react-native-events-calendar';
import {View, StyleSheet, Image,Text,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';
import Flying from 'react-element-flying';


const DailyCalendar = ({ navigation, calendars }) => {
	const initialDate = navigation.getParam('date').dateString;
	const project = navigation.getParam('project');
	const events = navigation.getParam('events').map((event) => {
		return { start: event.start, end: event.end, title: 'Busy', summary: '' };
	});
	console.log(events);
	let { width } = Dimensions.get('window');
	//const filteredEvents = events.filter((event) => event.start.substring(0, 10) === initialDate);
	//console.log(filteredEvents);


	return (
		<>
		<EventCalendar
			eventTapped={()=>{}}
			events={events}
			width={width}
			initDate={initialDate}
			scrollToFirst={true}
			size={1}
		/>
		<TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('CreateM',{ project })}>
			<Image source={require('../../../assets/images/add.png')} style={styles.home}/>
		</TouchableOpacity>
		</>
	);
};

const mapStateToProps = (state) => {
	return { calendars: state.calendars };
};

export default connect(mapStateToProps, actions)(withNavigation(DailyCalendar));

const styles = StyleSheet.create({
    home: {
		height: 50,
		width: 50,
		
        // marginRight:10
	},
	touch:{
		// alignSelf:'flex-start',
		marginHorizontal:65,
		paddingTop:60,
		position: 'absolute',
		marginTop:'150%'
		// alignItems:'flex-end'
	}
})