import { createStore, combineReducers } from 'redux';

import Auth from './reducers/auth';
import Usuarios from './reducers/usuarios';

const reducers = combineReducers({
	Auth,
	Usuarios
});

const store = createStore(reducers);

export default store;