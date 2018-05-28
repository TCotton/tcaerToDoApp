export const searchTextReducer = (state = '', action) => {
	switch(action.type) {
		case 'SET_SEARCH_TYPE':
			return action.searchText;
		default:
			return state;
	}
}

export const showCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return action.toggle;
		default:
			return state;
	}
}


