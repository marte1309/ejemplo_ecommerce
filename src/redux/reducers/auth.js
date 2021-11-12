export const AUTH = 'AUTH';

export default function authorization(state = { auth: false }, action) {
	switch(action.type) {
		case AUTH:
			return {
				...state,
				auth: action.value
			};
		default:
			return state;
	}
}