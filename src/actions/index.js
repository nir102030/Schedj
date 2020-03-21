export const addProject = (pid) => {
    return {
        type: 'add_project',
        payload: pid
    };
};