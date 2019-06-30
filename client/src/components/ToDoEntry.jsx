import React, { Component } from 'react';
import helpers from '../helpers/helpers.js';
export default class ToDoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { _id, content, completed } = this.props.task;
    let filter = { _id: _id };
    let replacement = { completed: !completed };
    helpers.changeTask(filter, replacement).then(() => {
      this.props.handleUpdate();
    });
  }

  render() {
    const { content, completed } = this.props.task;
    return (
      <li
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={this.handleClick}
      >
        {content}
        <button>Edit</button>
        <button>Delete</button>
      </li>
    );
  }
}
