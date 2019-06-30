const sqlDb = require('../../db/sql');

const mongoDb = require('../../db/mongodb');

module.exports = {
  getToDos: () => {
    return mongoDb.find();
  },
  saveToDo: toDo => {
    return mongoDb.create(toDo);
  },
  changeToDo: ({ filter, replacement }) => {
    return mongoDb.update(filter, replacement);
  },
  deleteToDo: _id => {
    return mongoDb.deleteOne(_id);
  }
};
