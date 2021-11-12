export const GET_CART = 'GET_CART';

export default function ProductsReducer(state = { cart: [] }, action) {
	switch(action.type) {
		case GET_CART:
			return {
				...state
			};
		default:
			return state;
	}
}