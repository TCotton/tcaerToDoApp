import { createStore, compose, combineReducers } from 'redux';

const stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: [],
};
let nextHobbyId = 1;
let nextMovieId = 1;
let reducer = (state = stateDefault, action) => {

	switch (action.type) {
		default:
			return state;
	}
};

const nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

const hobbiesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.name
				}
			]
		case 'REMOVE_HOBBY':
			return {
				hobbies: state.filter((hobby) => {
					return hobby.id !== action.id;
				})
			};
		default:
			return state;
	}
};

const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre

				}
			];
		case 'REMOVE_MOVIE':
			return {
				movies: state.filter((movie) => {
					return movie.id !== action.id;
				})
			}
		default:
			return state;
	}
};

reducer = combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
});

const store = createStore(reducer, compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f,
));

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
	const state = store.getState();
	console.dir(state);

	document.getElementById('root').innerHTML = state.name;
	console.log('name is', state.name);
});

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Andrew'
});

store.dispatch({
	type: 'ADD_HOBBY',
	name: 'Running'
});

store.dispatch({
	type: 'ADD_HOBBY',
	name: 'Kung Fu'
});

// unsubscribe();

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Jim'
});

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Die Hard',
	genre: 'Action film'
});

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Whatever Film',
	genre: 'comedy'
});

store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 1,
});

store.dispatch({
	type: 'REMOVE_MOVIE',
	id: 1,
});

