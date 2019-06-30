import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: []
    };
  }
  render() {
    return (
      <div>
        <h1>My ToDoList:</h1>
        <Form />
      </div>
    );
  }
}
