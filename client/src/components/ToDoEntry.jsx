import React, { Component } from 'react';

export default class ToDoEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { content, completed } = this.props.task;
    return <li>{content}</li>;
  }
}
