import productos from "../../assets/productos";

export const GET_PRODUCTS = 'GET_PRODUCTS';

export default function ProductsReducer(state = { auth: false }, action) {
	switch(action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: [...productos]
			};
		default:
			return state;
	}
}