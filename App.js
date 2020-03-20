import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ProjectsScreen from './src/screens/ProjectScreens/ProjectsScreen';
import ProjectCalendarScreen from './src/screens/CalendarScreens/ProjectCalendarScreen';
import MeetingsScreen from './src/screens/MeetingScreens/MeetingsScreen';
import EditProjectScreen from './src/screens/ProjectScreens/EditProjectScreen';
import CreateProjectScreen from './src/screens/ProjectScreens/CreateProjectScreen';
import CreateMeetingScreen from './src/screens/MeetingScreens/CreateMeetingScreen';
import EditMeetingScreen from './src/screens/MeetingScreens/EditMeetingScreen';



const navigator = createStackNavigator({
    Projects: ProjectsScreen,
    Meetings: MeetingsScreen,
    Calendar: ProjectCalendarScreen,
    EditP: EditProjectScreen,
    CreateP: CreateProjectScreen,
    EditM: EditMeetingScreen,
    CreateM: CreateMeetingScreen
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