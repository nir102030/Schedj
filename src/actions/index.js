export const addProject = (project) => {
    return {
        type: 'add_project',
        payload: {project}
    };
};

export const editProject = (project) => {
    return {
        type: 'edit_project',
        payload: {project}
    };
};

export const deleteProject = (project) => {
    return {
        type: 'delete_project',
        payload: project
    };
};

export const addMeeting = (meeting) => {
    return {
        type: 'add_meeting',
        payload: {meeting}
    };
};

export const editMeeting = (meeting) => {
    return {
        type: 'edit_meeting',
        payload: {meeting}
    };
};

export const deleteMeeting = (meeting) => {
    return {
        type: 'delete_meeting',
        payload: {meeting}
    };
};

export const addTask = (task) => {
    return {
        type: 'add_task',
        payload: {task}
    };
};