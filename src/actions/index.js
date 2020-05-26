export const addProject = (project) => {
	return {
		type: 'add_project',
		payload: { project },
	};
};

export const editProject = (project) => {
	return {
		type: 'edit_project',
		payload: { project },
	};
};

export const deleteProject = (project) => {
	return {
		type: 'delete_project',
		payload: project,
	};
};

export const addMeeting = (meeting) => {
	return {
		type: 'add_meeting',
		payload: { meeting },
	};
};

export const editMeeting = (meeting) => {
	return {
		type: 'edit_meeting',
		payload: { meeting },
	};
};

export const deleteMeeting = (meeting) => {
	return {
		type: 'delete_meeting',
		payload: { meeting },
	};
};

export const addTask = (task) => {
	return {
		type: 'add_task',
		payload: { task },
	};
};

export const editTask = (task) => {
	return {
		type: 'edit_task',
		payload: { task },
	};
};

export const deleteTask = (task) => {
	return {
		type: 'delete_task',
		payload: { task },
	};
};

export const addTopic = (topic) => {
	return {
		type: 'add_topic',
		payload: { topic },
	};
};

export const editTopic = (topic) => {
	return {
		type: 'edit_topic',
		payload: { topic },
	};
};

export const deleteTopic = (topic) => {
	return {
		type: 'delete_topic',
		payload: { topic },
	};
};

//This action is not in use
export const signIn = (uid) => {
	return {
		type: 'sign_in',
		payload: { uid },
	};
};
