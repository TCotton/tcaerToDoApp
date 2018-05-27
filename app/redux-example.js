import { createStore, compose, combineReducers } from 'redux';
import axios from 'axios';

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

const mapReducerDefaults = {
	isFetching: false,
	url: undefined,
}

// Map reducer and action generators
// --------------------
const mapReducer = (state = mapReducerDefaults, action) => {
	switch (action.type) {
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined,
			};
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url,
			};
		default:
			return state;
	}
}

const startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
};

const completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url,
	}
};

const fetchLocation = () => {
	store.dispatch(startLocationFetch());

	axios.get('https://ipinfo.io/').then((res) => {
		const loc = res.data.loc;
		const baseUrl = 'https://www.google.com/maps?q=';

		store.dispatch(completeLocationFetch(baseUrl + loc));
	});
};

let reducer = combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer,
});

const store = createStore(reducer, compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f,
));

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
	const state = store.getState();
	console.dir(state);

	if (state.map.isFetching) {
		document.getElementById('root').innerHTML = 'Loading...';
	} else if (state.map.url) {
		document.getElementById('root').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
	}
});

fetchLocation();

const currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Johnny'));

store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('running'));

store.dispatch(addHobby('Kung Fu'));

// unsubscribe();

store.dispatch(changeName('Jim'));

store.dispatch(addMovie('Die Hard', 'Action film'));

store.dispatch(addMovie('Whatever film', 'comedy'));

store.dispatch(removeHobby(1));

store.dispatch(removeMovie(1));
