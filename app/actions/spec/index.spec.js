import { setSearchText } from '../index';

fdescribe('Actions', () => {
	it('should generate search text actions', () => {

		const action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		}

		const result = setSearchText(action.searchText);

		expect(result.searchText).toBe(action.searchText);
	});
});
