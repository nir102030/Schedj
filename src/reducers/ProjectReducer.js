export default (state = [], action) => {
	switch (action.type) {
		case 'add_project':
			return [
				...state,
				{
					uid: action.payload.project.uid,
					id: action.payload.project.id,
					name: action.payload.project.name,
					date: action.payload.project.date,
					participants: action.payload.project.participants,
					minForMeeting: action.payload.project.minForMeeting,
					reminder: action.payload.project.reminder,
					notes: action.payload.project.notes,
					participantsStatus: action.payload.project.participantsStatus,
					status: action.payload.project.status,
				},
			];
		case 'edit_project':
			return state.map((project) => {
				return project.id === action.payload.project.id ? action.payload.project : project;
			});
		case 'delete_project':
			return state.filter((project) => project.id != action.payload.project.id);
		default:
			return state;
	}
};
