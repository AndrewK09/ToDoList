const mongoose = require('mongoose');
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/toDoList', {
    useNewUrlParser: true
  });
}

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
});

let toDoSchema = new mongoose.Schema({
  content: String,
  completed: { type: Boolean, default: false }
});

let ToDos = mongoose.model('ToDo', toDoSchema);

module.exports = ToDos;
