import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
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
import TaskScreen from './src/screens/TaskScreens/TaskScreen'
import CreateTaskScreen from './src/screens/TaskScreens/CreateTaskScreen';
import EditTaskScreen from './src/screens/TaskScreens/EditTaskScreen';

const navigator = createStackNavigator({
    Calendar: ProjectCalendarScreen,
    Projects: ProjectsScreen,
    CreateP: CreateProjectScreen,
    EditP: EditProjectScreen,
    Meetings: MeetingsScreen,
    CreateM: CreateMeetingScreen,
    EditM: EditMeetingScreen,
    Tasks: TaskScreen,
    CreateT: CreateTaskScreen,
    EditT: EditTaskScreen
  },
  {
    initialRouteName: 'Projects',
    defaultNavigationOptions: {
      title: 'Schedj',
      headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'right',
        fontSize: 35,
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