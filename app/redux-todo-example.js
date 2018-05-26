import { createStore } from 'redux';

const reducer = (
	state = {
		todos: [],
		searchText: '',
		showCompleted: false,
	},
	action) => {
	return state;
};
const store = createStore(reducer);
const currentState = store.getState();
console.log('currentState', currentState);
