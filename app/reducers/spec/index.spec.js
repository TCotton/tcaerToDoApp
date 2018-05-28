import { searchTextReducer, showCompletedReducer, todosReducer } from '../index.js';
import deepFreeze from 'deep-freeze-strict';

fdescribe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {

			const action = {
				type: 'SET_SEARCH_TYPE',
				searchText: 'This is search text',
			}

			const result = searchTextReducer(deepFreeze({}), deepFreeze(action));

			expect(result).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should return correct inverse boolean state', () => {

			const action = {
				type: 'TOGGLE_SHOW_COMPLETED',
			}

			const result = showCompletedReducer(deepFreeze(true), deepFreeze(action));

			expect(result).toEqual(false);
		});

		it('should return correct default', () => {

			const action = {
				type: 'NO_CASE_LISTED'
			}

			const result = showCompletedReducer(deepFreeze({}), deepFreeze(action));

			expect(result).not.toEqual(action.toggle);
		});
	});

	describe('todosReducer', () => {
		it('should add new todo', () => {
			const action = {
				type: 'ADD_TODO',
				text: 'Walk the dog'
			}

			const result = todosReducer(deepFreeze([]), deepFreeze(action));

			expect(result.length).toEqual(1);
			expect(result[0].text).toEqual(action.text);
		});

		it('should toggle todo', () => {
			const todos = [{
				id: '123',
				text: 'Something',
				completed: true,
				createdAt: 123,
				completedAt: 123,
			}];

			const action = {
				type: 'TOGGLE_TODO',
				id: '123',
			}

			const result = todosReducer(deepFreeze(todos), deepFreeze(action));

			expect(result[0].completed).toEqual(false);
			expect(result[0].completedAt).toEqual(undefined);
		});
	});
});
