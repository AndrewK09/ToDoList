const sqlDb = require('../../db/sql');

const mongoDb = require('../../db/mongodb');

module.exports = {
  getToDos: () => {
    return mongoDb.find();
  },
  saveToDo: toDo => {
    return mongoDb.create(toDo);
  }
};
