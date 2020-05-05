//this reducer is not in use yet
export default (state = {}, action) => {
	switch (action.type) {
		case 'sign_in':
			return { ...state, uid: action.payload };
		default:
			return state;
	}
};
