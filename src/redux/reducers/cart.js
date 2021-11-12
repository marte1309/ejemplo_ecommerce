import Swal from "sweetalert2";

export const GET_CART = 'GET_CART';
export const CART_ADD = 'CART_ADD';
export const CART_DELETE = 'CART_DELETE';

export default function CartReducer(state = { cart: [] }, action) {
	let cart = [...state.cart] || [];
	switch(action.type) {
		case GET_CART:
			return {
				...state
			};
		case CART_ADD:
			let item = cart.find(product => product.id === action.value.id)
			if (item) {
				cart = cart.map(product => {
					if (product.id === item.id) {
						product.quantity = product.quantity + 1
					}
					return product;
				})
			} else {
				cart.push({...action.value, quantity: 1});
			}
			Swal.fire("Producto Agregado", "", "success");

			return {
				...state,
				cart: cart
			};
		case CART_DELETE:
			cart = cart.filter((product) => product.id !== action.value.id)

			return {
				...state,
				cart: cart
			};
		default:
			return state;
	}
}