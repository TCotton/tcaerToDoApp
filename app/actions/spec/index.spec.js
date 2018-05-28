import {
	setSearchText,
	addToDo,
	toggleShowCompleted,
	toggleToDo
} from '../index';

fdescribe('Actions', () => {
	it('should generate search text actions', () => {

		const action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		}

		const result = setSearchText(action.searchText);

		expect(result.searchText).toEqual(action.searchText);
		expect(result.type).toEqual(action.type);
		expect(result).toEqual(action);
	});

	it('should generate addToDo action', () => {

		const action = {
			type: 'SET_SEARCH_TEXT',
			text: 'Some search text'
		}

		const result = addToDo(action.text);

		expect(result.text).toEqual(action.text);
		expect(result.type).toEqual(action.type);
		expect(result).toEqual(action);
	});

	it('should generate toggleShowCompleted action', () => {

		const action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}

		const result = toggleShowCompleted();

		expect(result.type).toEqual(action.type);
		expect(result).toEqual(action);
	});

	it('should generate toggleToDo action', () => {

		const action = {
			type: 'TOGGLE_TODO',
			id: 'Some toggle text'
		}

		const result = toggleToDo(action.id);

		expect(result.id).toEqual(action.id);
		expect(result.type).toEqual(action.type);
		expect(result).toEqual(action);
	});
});
