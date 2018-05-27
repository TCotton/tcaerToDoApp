import { createStore, compose } from 'redux';

const stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: [],
};
let nextHobbyId = 1;
let nextMovieId = 1;
const reducer = (state = stateDefault, action) => {

	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			}
		case 'ADD_HOBBY':
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId =+ 1,
						hobby: action.name
					}
				]
			};
		case 'ADD_MOVIE':
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId += 1,
						title: action.title,
						genre: action.genre
					}
				]
			};
		default:
			return state;
	}

};

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





