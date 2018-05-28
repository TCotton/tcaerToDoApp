import { combineReducers } from 'redux'
import { nameReducer, hobbiesReducer, moviesReducer, mapReducer } from '../reducers';

export const reducer = combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer,
});
