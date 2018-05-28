import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { nameReducer, hobbiesReducer, moviesReducer, mapReducer } from '../reducers';
import ReduxThunk from 'redux-thunk';

export const configureStore = () => {

	const reducer = combineReducers({
		name: nameReducer,
		hobbies: hobbiesReducer,
		movies: moviesReducer,
		map: mapReducer,
	});

	return createStore(reducer, compose(
		applyMiddleware(ReduxThunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	));
}
