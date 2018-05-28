import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { nameReducer, hobbiesReducer, moviesReducer, mapReducer } from '../reducers';
import { ReduxThunk as thunk } from 'redux-thunk';

export const configureStore = () => {

	const reducer = combineReducers({
		name: nameReducer,
		hobbies: hobbiesReducer,
		movies: moviesReducer,
		map: mapReducer,
	});

	const store = createStore(reducer, compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	));

	return store;
}
