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