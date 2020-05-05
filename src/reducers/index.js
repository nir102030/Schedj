import { combineReducers } from 'redux';
import ProjectReducer from './ProjectReducer';
import MeetingReducer from './MeetingReducer';
import TaskReducer from './TaskReducer';
import TopicReducer from './TopicReducer';
import UserReducer from './UserReducer';

export default combineReducers({
	projects: ProjectReducer,
	meetings: MeetingReducer,
	tasks: TaskReducer,
	topics: TopicReducer,
	users: UserReducer,
});
