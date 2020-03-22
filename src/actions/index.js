export const addProject = (name,minForMeeting) => {
    return {
        type: 'add_project',
        payload: {name,minForMeeting}
    };
};

export const editProject = (id, name , minForMeeting) => {
    return {
        type: 'edit_project',
        payload: {id,name,minForMeeting}
    };
};