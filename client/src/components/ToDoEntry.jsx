import React, { Component } from 'react';
import helpers from '../helpers/helpers.js';
export default class ToDoEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    const { _id, completed } = this.props.task;
    let filter = { _id };
    let replacement = { completed: !completed };
    if (e.target.name === 'edit') {
      let content = prompt('Edit task');
      replacement = { content };
    }
    helpers.changeTask(filter, replacement).then(() => {
      this.props.handleUpdate();
    });
  }

  handleDelete(e) {
    const { _id } = this.props.task;
    helpers.deleteTask(_id).then(() => {
      this.props.handleUpdate();
    });
  }

  render() {
    const { content, completed } = this.props.task;
    return (
      <li className='row'>
        <button className='col-sm-1' name='edit' onClick={this.handleChange}>
          E
        </button>
        <button className='col-sm-1' onClick={this.handleDelete}>
          X
        </button>
        <h5
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
          onClick={this.handleChange}
          className='col-sm-4'
        >
          {content}
        </h5>
      </li>
    );
  }
}
