import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router, hashHistory, IndexRoute } from 'react-router';

import TodoApp from './components/TodoApp';

import './styles/styles.scss';

ReactDOM.render(
	<TodoApp />,
	document.getElementById('root')
);

