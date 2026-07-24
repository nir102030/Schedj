import React from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
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
LogBox.ignoreLogs([
	'VirtualizedLists should never be nested', //This warning will be ignored.
	'Setting a timer for a long period of time',
	'componentWillMount has been renamed, and is not recommended for use',
	'Failed child context type: Invalid child context `virtualizedCell.cellKey`',
	'componentWillReceiveProps has been renamed, and is not recommended for use',
	'Unhandled promise rejection',
]);

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
	title: '',
	headerTitleStyle: {
		fontWeight: 'bold',
		textAlign: 'right',
		fontSize: 38,
		color: '#193c4d',
		paddingBottom: 5,
	},
};

// Screens that belong to the auth/splash flow: no header, matching the old
// switch-navigator's chrome-less behavior for these screens.
const noHeaderOptions = { headerShown: false, gestureEnabled: false };

const App = () => {
	useKeepAwake();
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<SafeAreaProvider>
				<Provider store={store}>
					<NavigationContainer>
						<Stack.Navigator initialRouteName="ResolveAuth" screenOptions={defaultScreenOptions}>
							<Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} options={noHeaderOptions} />
							<Stack.Screen name="SignUp" component={SignupScreen} options={noHeaderOptions} />
							<Stack.Screen name="LogIn" component={LoginScreen} options={noHeaderOptions} />
							<Stack.Screen name="OpenS" component={OpenScreen} options={noHeaderOptions} />
							<Stack.Screen name="Projects" component={ProjectsScreen} options={ProjectsScreen.options} />
							<Stack.Screen name="Calendar" component={ProjectCalendarScreen} options={ProjectCalendarScreen.options} />
							<Stack.Screen name="DailyCalendar" component={DailyCalendarScreen} />
							<Stack.Screen name="CreateP" component={CreateProjectScreen} options={CreateProjectScreen.options} />
							<Stack.Screen name="EditP" component={EditProjectScreen} options={EditProjectScreen.options} />
							<Stack.Screen name="InviteP" component={ProjectInvitation} />
							<Stack.Screen name="Meetings" component={MeetingsScreen} options={MeetingsScreen.options} />
							<Stack.Screen name="CreateM" component={CreateMeetingScreen} options={CreateMeetingScreen.options} />
							<Stack.Screen name="EditM" component={EditMeetingScreen} options={EditMeetingScreen.options} />
							<Stack.Screen name="InviteM" component={MeetingInvitation} />
							<Stack.Screen name="Tasks" component={TasksScreen} options={TasksScreen.options} />
							<Stack.Screen name="CreateT" component={CreateTaskScreen} options={CreateTaskScreen.options} />
							<Stack.Screen name="EditT" component={EditTaskScreen} />
							<Stack.Screen name="AboutUs" component={AboutUsScreen} options={AboutUsScreen.options} />
							<Stack.Screen name="Settings" component={SettingsScreen} options={SettingsScreen.options} />
							<Stack.Screen name="Gantt" component={GanttScreen} />
							<Stack.Screen name="ComeSoon" component={ComingSoonScreen} options={ComingSoonScreen.options} />
							<Stack.Screen name="SignInG" component={SignInGoogleScreen} />
						</Stack.Navigator>
					</NavigationContainer>
					<FlashMessage position="top" />
				</Provider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

export default App;
