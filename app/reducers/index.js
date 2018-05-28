import moment from 'moment';
import uuid from 'node-uuid';

export const searchTextReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_SEARCH_TYPE':
			return action.searchText;
		default:
			return state;
	}
}

export const showCompletedReducer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
}

export const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: uuid(),
					text: action.text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined,
				}
			];
		case 'TOGGLE_TODO':

			return state.map((todo) => {
				if (todo.id === action.id) {
					const nextCompleted = !todo.completed;
					return {
						...todo,
						completed: nextCompleted,
						completedAt: nextCompleted ? moment().unix() : undefined,
					}
				}
				return todo;
			});

		default:
			return state;
	}
}



