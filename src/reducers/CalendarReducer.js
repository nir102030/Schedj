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
		case 'edit_calendar':
			return state.map((calendar) => {
				return calendar.uid === action.payload.calendar.uid ? action.payload.calendar : calendar;
			});

		default:
			return state;
	}
};
