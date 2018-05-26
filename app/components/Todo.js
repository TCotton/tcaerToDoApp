import React from 'react';
import moment from 'moment';
import ReactClass from 'create-react-class';

const Todo = ReactClass({
  render: function () {
    const {id, text, completed, createdAt, completedAt} = this.props;
		const todoClassName = completed ? 'todo todo-completed' : 'todo';
		const renderDate = () => {
			let message = 'Created ';
			let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default Todo;
