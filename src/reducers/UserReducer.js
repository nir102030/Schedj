export default (state = [], action) => {
	switch (action.type) {
		case 'add_user':
			console.log(action.payload.uid);
			console.log(action.payload.email);
			return [
				...state,
				{
					uid: action.payload.uid,
					email: action.payload.email,
					profileName: '',
					profilePic: '',
					reminder: '',
					rank: '',
				},
			];
		case 'edit_user':
			return state.map((user) => {
				return user.uid === action.payload.user.uid ? action.payload.user : user;
			});
		case 'delete_user':
			return state.filter((user) => user.uid != action.payload.user.uid);
		default:
			return state;
	}
};
