import {
	changeName,
	addHobby,
	addMovie,
	fetchLocation,
} from './actions';

import { configureStore as store } from './store/configureStore';

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

store.dispatch(fetchLocation());

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

// check addHobby isn't working

/*store.dispatch(removeHobby(1));

store.dispatch(removeMovie(1));*/
