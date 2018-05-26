import { createStore } from 'redux';

const stateDefault = {
	todos: [],
	searchText: '',
	showCompleted: false,
}

const reducer = (
	state = stateDefault,
	action,
) => {

	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			}
		default:
			return state;
	}

};

const store = createStore(reducer);
const currentState = store.getState();

console.log('currentState', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'work',
});

console.log('searchText should be '\'work\'', currentState);


