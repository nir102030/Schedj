import { combineReducers } from 'redux';
import ProjectReducer from './ProjectReducer';
import MeetingReducer from './MeetingReducer';

export default combineReducers ({
    projects: ProjectReducer,
    meetings: MeetingReducer
});

