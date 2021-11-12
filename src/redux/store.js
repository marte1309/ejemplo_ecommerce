import { createStore, combineReducers } from 'redux';

import Auth from './reducers/auth';
import Products from './reducers/products';

const reducers = combineReducers({
	Auth,
	Products
});

const store = createStore(reducers);

export default store;