export default (state = [{pid:'1', mid:'1', date: '', from:'10:00', to: '12:00', place:'',participant: [], notes:[] }], action) => {
    switch (action.type) {
        case 'add_meeting':
            return ( [
                ...state, 
                {
                pid: action.payload.meeting.pid,
                mid: Math.floor(Math.random()*99999),
                date: action.payload.meeting.date,
                from: action.payload.meeting.from,
                to: action.payload.meeting.to,
                place: action.payload.meeting.place,
                participants: action.payload.meeting.participants,
                notes: action.payload.meeting.notes
                }
            ]
            );
        case 'edit_meeting':
            return state.map((meeting) => {
                return meeting.pid === action.payload.meeting.pid && meeting.mid === action.payload.meeting.mid  
                    ?action.payload.meeting
                    :meeting
            });
        case 'delete_meeting':
            return state.filter((meeting) => meeting.pid != action.payload.pid || meeting.mid != action.payload.meeting.mid);
        default: 
            return state;
    }
};