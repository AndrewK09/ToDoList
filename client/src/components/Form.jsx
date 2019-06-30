import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    const { content } = this.state;
    return (
      <div>
        <form>
          <label>Add toDo: </label>
          <input type='text' value={content} onChange={this.handleChange} />
          <input type='button' value='save' />
        </form>
      </div>
    );
  }
}
