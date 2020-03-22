export const addProject = (name) => {
    return {
        type: 'add_project',
        payload: name
    };
};

export const editProject = (id, name , minForMeeting) => {
    return {
        type: 'edit_project',
        payload: {id,name,minForMeeting}
    };
};