export default (state = [{id:1, name:'Test'}], action) => {
    switch (action.type) {
        case 'add_project':
            return ( [
                ...state, 
                {
                id: Math.floor(Math.random()*99999),
                name: action.payload.name,
                minForMeeting: action.payload.minForMeeting
                }
            ]
            );
        case 'edit_project':
            return state.map((project) => {
                return project.id === action.payload.id 
                    ?action.payload
                    :project;
            });
        default:
            return state;
    }
};