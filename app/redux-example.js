import { createStore } from 'redux'

const reducer = (state = { name: 'Anonymous' }, action) => {
	return state;
};
const store = createStore(reducer);
const currentState = store.getState();
console.log('currentState', currentState);
