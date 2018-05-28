import { searchTextReducer, showCompletedReducer } from '../index.js';

fdescribe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {

			const action = {
				type: 'SET_SEARCH_TYPE',
				searchText: 'This is search text',
			}

			const result = searchTextReducer({}, action);

			expect(result).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should return correct boolean', () => {

			const action = {
				type: 'TOGGLE_SHOW_COMPLETED',
				toggle: true,
			}

			const result = showCompletedReducer({}, action);

			expect(result).toEqual(action.toggle);
		});

		it('should return correct default', () => {

			const action = {
				type: 'NO_CASE_LISTED',
				toggle: true,
			}

			const result = showCompletedReducer({}, action);

			expect(result).not.toEqual(action.toggle);
		});
	});
});
