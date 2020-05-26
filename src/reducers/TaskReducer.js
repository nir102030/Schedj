export default (state = [], action) => {
	switch (action.type) {
		case 'add_task':
			return [
				...state,
				{
					pid: action.payload.task.pid,
					topic: action.payload.task.topic,
					mid: action.payload.task.mid,
					tid: action.payload.task.tid,
					name: action.payload.task.name,
					description: action.payload.task.description,
					status: action.payload.task.status,
					color: action.payload.task.color,
				},
			];
		case 'edit_task':
			return state.map((task) => {
				return task.pid === action.payload.task.pid && task.tid === action.payload.task.tid
					? action.payload.task
					: task;
			});
		case 'delete_task':
			return state.filter((task) => task.pid != action.payload.task.pid || task.tid != action.payload.task.tid);
		default:
			return state;
	}
};
