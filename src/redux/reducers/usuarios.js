export const GET_USUARIOS = 'GET_USUARIOS';

export default function UsuariosReducer(state = { auth: false }, action) {
	switch(action.type) {
		case GET_USUARIOS:
			return {
				...state,
				usuarios: []
			};
		default:
			return state;
	}
}
