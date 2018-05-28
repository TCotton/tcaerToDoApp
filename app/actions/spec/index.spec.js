import { setSearchText, addToDo } from '../index';

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

	it('should generate add todo action', () => {

		const action = {
			type: 'SET_SEARCH_TEXT',
			text: 'Some search text'
		}

		const result = addToDo(action.text);

		expect(result.text).toEqual(action.text);
		expect(result.type).toEqual(action.type);
		expect(result).toEqual(action);
	});
});
