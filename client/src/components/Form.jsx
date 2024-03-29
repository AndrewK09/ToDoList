import React, { Component } from 'react';
import helpers from '../helpers/helpers.js';
export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    helpers
      .addTask({ content: this.state.content })
      .then(() => {
        this.props.handleUpdate();
      })
      .then(() => {
        this.setState({ content: '' });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add toDo: </label>
          <input type='text' value={content} onChange={this.handleChange} />
          <input type='button' value='save' />
        </form>
      </div>
    );
  }
}
