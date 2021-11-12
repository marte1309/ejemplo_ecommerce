import productos from "../../assets/productos";

export const GET_PRODUCTS = 'GET_PRODUCTS';

export default function ProductsReducer(state = { products: [...productos] }, action) {
	switch(action.type) {
		case GET_PRODUCTS:
			return {
				...state
			};
		default:
			return state;
	}
}