import React from 'react';
import ReactClass from 'create-react-class';
import { connect } from 'react-redux';
import {
	addToDo
} from '../actions';

export const AddTodo = ReactClass({
  handleSubmit: function (e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(addToDo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
