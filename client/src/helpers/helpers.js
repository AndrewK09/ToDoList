const Axios = require('axios');

module.exports = {
  addTask: task => {
    return Axios.post('/toDos', task);
  },
  changeTask: (filter, replacement) => {
    return Axios.put('/toDos', { filter, replacement });
  },
  deleteTask: _id => {
    return Axios.delete('/toDos', { _id });
  }
};
