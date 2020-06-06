import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View,TouchableOpacity,Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ColorMessageComp from '../../components/calendarComponents/ColorMessageComp';
import firebase from 'firebase';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ProjectCalendarScreen = ({ navigation, users }) => {
	const project = navigation.getParam('project');
	const participants = project.participants;
	const [events, setEvents] = useState([]);

	const createEventsArray = () => {
		const projectUsers = participants.map((participant) => {
			return users.find((user) => participant === user.email);
		});
		let newEvents = [];
		projectUsers.map((user) => {
			const userEvents = user.calendar.events;
			//console.log(userEvents);
			return userEvents.map((event) => {
				//console.log(event);
				newEvents = [...newEvents, event];
			});
		});
		setEvents(newEvents);
	};

	useEffect(() => {
		createEventsArray();
	}, []);
	//console.log(events);
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row-reverse' }}>
				<ColorMessageComp colorCode="#388e3c" colorName="Green" description="Green - Available" />
				<ColorMessageComp colorCode="#fcc400" colorName="Yellow" description="Yellow - Waiting" />
				<ColorMessageComp colorCode="#d32f2f" colorName="Red" description="Red - Scheduled" />
				<ColorMessageComp colorCode="#808080" colorName="Grey" description="Grey - Busy" />
			</View>
			<Calendar onDayPress={(date) => navigation.navigate('DailyCalendar', { date, events })} />
		</View>
	);
};

ProjectCalendarScreen.navigationOptions = ({navigation}) => { 
    return{ headerRight:   
            <View style={styles.navigator}>
                <Text style={styles.headerStyle1}> Calendar </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')}>
                    <Image source={require('../../../assets/images/home.png')} style={styles.home}/>
                </TouchableOpacity>
            </View>
    };
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e8f1f9',
		height: '100%',
	},
	image: {
		height: 50,
		width: 50,
		marginRight: 15,
		alignSelf: 'center',
	},
    navigator:{
        flexDirection: 'row',
    },
	text: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 34,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
	test: {
		fontWeight: 'bold',
		fontSize: 30,
		marginVertical: 10,
		marginHorizontal: 34,
		alignSelf: 'center',
		color: 'white',
		textAlign: 'left',
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#8aa9b9',
		justifyContent: 'flex-end',
		borderBottomWidth: 5,
		borderBottomColor: '#2d6886',
	},
	TouchableOpacity: {
		backgroundColor: '#a1cfd5',
		flex: 1,
		flexDirection: 'row-reverse',
	},
	headerStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		marginRight: 5,
		alignSelf: 'center',
		color: '#263238',
		textAlign: 'left',
	},
	home: {
		height: 35,
        width: 35,
        marginRight:10
	},
    headerStyle1: { 
        fontWeight:'bold',
        fontSize: 30,
        marginRight: 5,
        alignSelf:'center',
        color:'#263238',
        textAlign:'left'
    },  
});

const mapStateToProps = (state) => {
	return { calendars: state.calendars, users: state.users };
};

export default connect(mapStateToProps, actions)(ProjectCalendarScreen);
