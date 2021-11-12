import { createStore, combineReducers } from 'redux';

import Auth from './reducers/auth';
import Products from './reducers/products';
import Cart from './reducers/cart';

const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}; 

const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch {
		// ignore write errors
	}
};

const persistedState = loadState();

const reducers = combineReducers({
	Auth,
	Products,
	Cart
});

const store = createStore(reducers, persistedState);

store.subscribe(() => {
	saveState({
		...store.getState()
	});
});

export default store;