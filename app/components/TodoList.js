import React from 'react';
import ReactClass from 'create-react-class';
import Todo from 'Todo';

const TodoList = ReactClass({
	render: function () {
		const {todos} = this.props;
		const renderTodos = () => {
			if (todos.length === 0) {
				return (
					<p className="container__message">Nothing To Do</p>
				);
			}

			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				);
			});
		};

		return (
			<div>
				{renderTodos()}
			</div>
		)
	}
});

export default TodoList;
