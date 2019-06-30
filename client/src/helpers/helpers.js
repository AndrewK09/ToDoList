const Axios = require('axios');

module.exports = {
  addTask: task => {
    return Axios.post('/toDos', task);
  }
};
