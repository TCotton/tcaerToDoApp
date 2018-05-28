import { createStore, compose } from 'redux';
import axios from 'axios';
import { reducer } from './store/configureStore';
import {
	startLocationFetch,
	completeLocationFetch,
	changeName,
	addHobby,
	addMovie,
	removeHobby,
	removeMovie,
} from './actions';

const fetchLocation = () => {
	store.dispatch(startLocationFetch());

	axios.get('https://ipinfo.io/').then((res) => {
		const loc = res.data.loc;
		const baseUrl = 'https://www.google.com/maps?q=';

		store.dispatch(completeLocationFetch(baseUrl + loc));
	});
};

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
