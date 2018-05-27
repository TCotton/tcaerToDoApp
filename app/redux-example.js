import { createStore, compose } from 'redux';

const reducer = (state = {name: 'Anonymous'}, action) => {
	console.log('new action');
	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
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

	document.getElementById('root').innerHTML = null;
	console.log('name is', state.name);
});

const currentState = store.getState();
console.log('currentState', currentState);

const action = {
	type: 'CHNAGE_NAME',
	name: 'Andrew'
};

store.dispatch(action);

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Andrew'
});

unsubscribe();

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Jim'
});





