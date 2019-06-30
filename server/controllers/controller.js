const model = require('../models/model.js');
const helpers = require('../helpers/apiHelpers.js');

const handleErr = (err, res) => {
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getToDos: (req, res) => {
    model
      .getToDos()
      .then(result => {
        res.send(result);
      })
      .catch(err => handleErr(err));
  },
  saveToDo: (req, res) => {
    model
      .saveToDo(req.body)
      .then(() => {
        res.send('Saved todo');
      })
      .catch(err => handleErr(err));
  },
  changeToDo: (req, res) => {
    model
      .changeToDo(req.body)
      .then(() => {
        res.send('Changed todo');
      })
      .catch(err => handleErr(err));
  }
};
