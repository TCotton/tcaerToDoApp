import { createStore } from 'redux';

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
const store = createStore(reducer);
const currentState = store.getState();
console.log('currentState', currentState);

const action = {
	type: 'CHNAGE_NAME',
	name: 'Andrew'
};

store.dispatch(action);

console.log('Name should be andrew', store.getState());
