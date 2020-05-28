export default (state = [], action) => {
	switch (action.type) {
		case 'add_user':
			console.log(action.payload.user.email);
			return [
				...state,
				{
					uid: action.payload.user.uid,
					email: action.payload.user.email,
					profileName: action.payload.user.profileName,
					profilePic: action.payload.user.profilePic,
					reminder: action.payload.user.reminder,
					rank: action.payload.user.rank,
					token: action.payload.user.token,
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
