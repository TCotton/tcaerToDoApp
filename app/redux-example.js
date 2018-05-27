import { createStore, compose, combineReducers } from 'redux';

const nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

const changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	}
};

const addHobby = (name) => {
	return {
		type: 'ADD_HOBBY',
		name
	}
};

const removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
	}
};

let nextHobbyId = 1;

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

const addMovie = (title, genre) => {
	return {
		type: 'ADD_HOBBY',
		title,
		genre
	}
};

const removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	}
};

let nextMovieId = 1;

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

let reducer = combineReducers({
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

store.dispatch(changeName('Johnny'));

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Andrew'
});

store.dispatch(addHobby('running'));

store.dispatch({
	type: 'ADD_HOBBY',
	name: 'Kung Fu'
});

// unsubscribe();

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Jim'
});

store.dispatch(addMovie('Die Hard', 'Action film'));

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Whatever Film',
	genre: 'comedy'
});

store.dispatch(removeHobby(1));

store.dispatch(removeMovie(1));
