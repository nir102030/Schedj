import { combineReducers } from 'redux';
import ProjectReducer from './ProjectReducer';
import MeetingReducer from './MeetingReducer';
import TaskReducer from './TaskReducer';


export default combineReducers ({
    projects: ProjectReducer,
    meetings: MeetingReducer,
    tasks: TaskReducer
});

