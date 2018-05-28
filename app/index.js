import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Route, Router, hashHistory, IndexRoute } from 'react-router';

import TodoApp from './components/TodoApp';

import './styles/styles.scss';

import { configure } from './store/configureStore';
import { addToDo, setSearchText, toggleShowCompleted } from './actions';

const store = configure();

store.subscribe(() => {
	console.log('new state');
});

store.dispatch(addToDo('Finish this project!!'));
store.dispatch(setSearchText('yard'));
store.dispatch(toggleShowCompleted());

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.querySelector('#root')
);
