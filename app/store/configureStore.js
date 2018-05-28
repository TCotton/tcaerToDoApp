import { searchTextReducer, showCompletedReducer, todosReducer } from '../reducers';
import { combineReducers, compose, createStore } from 'redux';

export const configure = () => {
	const reducer = combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer,
	});

	return createStore(reducer, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	));
}
