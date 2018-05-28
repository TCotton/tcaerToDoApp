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

export const toggleShowCompleted = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	}
}

export const toggleToDo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}
