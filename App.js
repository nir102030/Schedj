import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { YellowBox } from 'react-native'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ProjectCalendarScreen from './src/screens/CalendarScreens/ProjectCalendarScreen';
import ProjectsScreen from './src/screens/ProjectScreens/ProjectsScreen';
import CreateProjectScreen from './src/screens/ProjectScreens/CreateProjectScreen';
import EditProjectScreen from './src/screens/ProjectScreens/EditProjectScreen';
import MeetingsScreen from './src/screens/MeetingScreens/MeetingsScreen';
import CreateMeetingScreen from './src/screens/MeetingScreens/CreateMeetingScreen';
import EditMeetingScreen from './src/screens/MeetingScreens/EditMeetingScreen';
import TaskScreen from './src/screens/TaskScreens/TaskScreen';
import TaskStatusScreen from './src/screens/TaskScreens/TaskStatusScreen';
import CreateTaskScreen from './src/screens/TaskScreens/CreateTaskScreen';
import EditTaskScreen from './src/screens/TaskScreens/EditTaskScreen';
import AboutUs from './src/screens/General/AboutUs'
import Settings from './src/screens/General/Settings'
import OpenScreen from './src/screens/General/OpenScreen'



//This function ignores unresolved warnings
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',//This warning will be ignored.
]);

const navigator = createStackNavigator({
    Calendar: ProjectCalendarScreen,
    Projects: ProjectsScreen,
    CreateP: CreateProjectScreen,
    EditP: EditProjectScreen,
    Meetings: MeetingsScreen,
    CreateM: CreateMeetingScreen,
    EditM: EditMeetingScreen,
    Tasks:TaskScreen,
    TaskStatus: TaskStatusScreen,
    CreateT: CreateTaskScreen,
    EditT: EditTaskScreen,
    AboutUs: AboutUs,
    Settings: Settings,
    OpenS:OpenScreen
  },
  {
    initialRouteName: 'OpenS',
    defaultNavigationOptions: {
      title: 'Schedj',
      headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'right',
        fontSize: 38,
        color:'#193c4d',
        flex:1
      }
    }
  }
);
const App =  createAppContainer(navigator);

export default ()=>{
  return <Provider store = { createStore (reducers) } >
    <App/>
  </Provider>
}