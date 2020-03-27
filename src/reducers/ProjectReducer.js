export default (state = [], action) => {
    switch (action.type) {
        case 'add_project':
            return ( [
                ...state, 
                {
                id: Math.floor(Math.random()*99999),
                name: action.payload.project.name,
                participants: action.payload.project.participants,
                minForMeeting: action.payload.project.minForMeeting,
                reminder: action.payload.project.reminder,
                notes: action.payload.project.notes
                }
            ]
            );
        case 'edit_project':
            return state.map((project) => {
                return project.id === action.payload.project.id 
                    ?action.payload.project
                    :project
            });
        default:
            return state;
    }
};