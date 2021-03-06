import React, { useEffect, useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { YellowBox } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import ProjectCalendarScreen from './src/screens/CalendarScreens/ProjectCalendarScreen';
import ProjectsScreen from './src/screens/ProjectScreens/ProjectsScreen';
import CreateProjectScreen from './src/screens/ProjectScreens/CreateProjectScreen';
import EditProjectScreen from './src/screens/ProjectScreens/EditProjectScreen';
import ProjectInvitation from './src/screens/Invitations/ProjectInvitation';
import MeetingsScreen from './src/screens/MeetingScreens/MeetingsScreen';
import CreateMeetingScreen from './src/screens/MeetingScreens/CreateMeetingScreen';
import EditMeetingScreen from './src/screens/MeetingScreens/EditMeetingScreen';
import MeetingInvitation from './src/screens/Invitations/MeetingInvitation';
import TasksScreen from './src/screens/TaskScreens/TasksScreen';
import CreateTaskScreen from './src/screens/TaskScreens/CreateTaskScreen';
import EditTaskScreen from './src/screens/TaskScreens/EditTaskScreen';
import AboutUsScreen from './src/screens/General/AboutUsScreen';
import SettingsScreen from './src/screens/General/SettingsScreen';
import OpenScreen from './src/screens/General/OpenScreen';
import LoginScreen from './src/screens/AuthScreens/LoginScreen';
import GanttScreen from './src/screens/General/GanttScreen';
import ComingSoonScreen from './src/screens/General/ComingSoonScreen';
import SignInGoogleScreen from './src/screens/General/SignInGoogleScreen';
import SignupScreen from './src/screens/AuthScreens/SignupScreen';
import ResolveAuthScreen from './src/screens/AuthScreens/ResolveAuthScreen';
import DailyCalendarScreen from './src/screens/CalendarScreens/DailyCalendarScreen';

//This function ignores unresolved warnings
YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', //This warning will be ignored.
	'Setting a timer for a long period of time',
	'componentWillMount has been renamed, and is not recommended for use',
	'Failed child context type: Invalid child context `virtualizedCell.cellKey`',
	'componentWillReceiveProps has been renamed, and is not recommended for use',
	'Unhandled promise rejection',
]);

const navigator = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		SignUp: SignupScreen,
		LogIn: LoginScreen,
	}),
	mainFlow: createSwitchNavigator({
		OpenS: OpenScreen,
		mainApp: createStackNavigator(
			{
				Projects: ProjectsScreen,
				Calendar: ProjectCalendarScreen,
				DailyCalendar: DailyCalendarScreen,
				CreateP: CreateProjectScreen,
				EditP: EditProjectScreen,
				InviteP: ProjectInvitation,
				Meetings: MeetingsScreen,
				CreateM: CreateMeetingScreen,
				EditM: EditMeetingScreen,
				InviteM: MeetingInvitation,
				Tasks: TasksScreen,
				CreateT: CreateTaskScreen,
				EditT: EditTaskScreen,
				AboutUs: AboutUsScreen,
				Settings: SettingsScreen,
				Gantt: GanttScreen,
				ComeSoon: ComingSoonScreen,
				SignInG: SignInGoogleScreen,
			},
			{
				defaultNavigationOptions: {
					title: '',
					headerTitleStyle: {
						fontWeight: 'bold',
						textAlign: 'right',
						fontSize: 38,
						color: '#193c4d',
						paddingBottom: 5,
					},
				},
			}
		),
	}),
});

const App = createAppContainer(navigator);

export default () => {
	useKeepAwake();
	return (
		<Provider store={store}>
			<App />
			<FlashMessage position="top" />
		</Provider>
	);
};
