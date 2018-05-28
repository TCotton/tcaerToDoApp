export const setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	}
};

export const addToDo = (text) => {
	return {
		type: 'SET_SEARCH_TEXT',
		text
	}
}

export const toggleShowCompleted = (text) => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED',
		text
	}
}

export const toggleToDo = (text) => {
	return {
		type: 'TOGGLE_TODO',
		text
	}
}


