export default (state = [{pid:'1', name:'General'}], action) => {
    switch (action.type) {
        case 'add_topic':
            console.log(action.payload.topic)
            return ( [
                ...state, 
                {
                pid: action.payload.topic.pid,
                name: action.payload.topic.name
                }
            ]
            );
        case 'edit_topic':
            return state.map((topic) => {
                return topic.pid === action.payload.topic.pid && topic.name === action.payload.topic.name  
                    ?action.payload.topic
                    :topic
            });
        case 'delete_topic':
            return state.filter((topic) => topic.pid != action.payload.topic.pid || topic.name != action.payload.topic.name);
        default: 
            return state;
    }
};