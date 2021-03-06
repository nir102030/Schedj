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

export const addUser = (user) => {
	return {
		type: 'add_user',
		payload: { user },
	};
};

export const editUser = (user) => {
	return {
		type: 'edit_user',
		payload: { user },
	};
};

export const deleteUser = (user) => {
	return {
		type: 'delete_user',
		payload: user,
	};
};

export const addCalendar = (calendar) => {
	return {
		type: 'add_calendar',
		payload: { calendar },
	};
};

export const editCalendar = (calendar) => {
	return {
		type: 'edit_calendar',
		payload: { calendar },
	};
};
