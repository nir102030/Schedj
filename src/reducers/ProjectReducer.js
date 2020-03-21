export default (state = [], action) => {
    switch (action.type) {
        case 'add_project':
            return [...state, action.payload.pid];
        default:
            return state;
    }
};