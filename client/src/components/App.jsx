import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Form from './Form.jsx';
import ToDoList from './ToDoList.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: []
    };
    this.updateList = this.updateList.bind(this);
  }

  updateList() {
    Axios.get('/toDos').then(({ data }) => {
      this.setState({ toDos: data });
    });
  }

  componentDidMount() {
    this.updateList();
  }

  render() {
    return (
      <div>
        <h1>My ToDoList:</h1>
        <Form handleUpdate={this.updateList} />
        <h3>Tasks:</h3>
        <ToDoList todos={this.state.toDos} />
      </div>
    );
  }
}
