import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { YellowBox } from 'react-native'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import FlashMessage from "react-native-flash-message";
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
import AboutUsScreen from './src/screens/General/AboutUsScreen'
import SettingsScreen from './src/screens/General/SettingsScreen'
import OpenScreen from './src/screens/General/OpenScreen'
//import LogInScreen from './src/screens/General/LogInScreen'
import GanttScreen from './src/screens/General/GanttScreen'
import ComingSoonScreen from './src/screens/General/ComingSoonScreen'
import SignInGoogleScreen from './src/screens/General/SignInGoogleScreen'

//This function ignores unresolved warnings
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',//This warning will be ignored.
]);

const navigator = createStackNavigator({
    Calendar: ProjectCalendarScreen,
    Projects: ProjectsScreen,
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
    OpenS:OpenScreen,
    //LogIn:LogInScreen,
    Gantt:GanttScreen,
    ComeSoon:ComingSoonScreen,
    SignInG:SignInGoogleScreen,

  },
  {
    initialRouteName: 'OpenS',
    defaultNavigationOptions: {
      title: '',
      headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'right',
        fontSize: 38,
        color:'#193c4d',
        paddingBottom:5,
      }
    }
  }
);

const App =  createAppContainer(navigator);

export default ()=>{
  return <Provider store = { createStore (reducers) } >
    <App/>
    <FlashMessage position="top"/>
    </Provider>
}