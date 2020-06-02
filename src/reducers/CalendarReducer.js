export default (state = [], action) => {
	switch (action.type) {
		case 'add_calendar':
			return [
				...state,
				{
					cid: action.payload.calendar.cid,
					uid: action.payload.calendar.uid,
					name: action.payload.calendar.name,
					events: action.payload.calendar.events,
				},
			];
		// case 'edit_calendar':
		// 	return state.map((project) => {
		// 		return project.id === action.payload.project.id ? action.payload.project : project;
		// 	});
		// case 'delete_calendar':
		// 	return state.filter((project) => project.id != action.payload.project.id);
		default:
			return state;
	}
};
