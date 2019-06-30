const router = require('express').Router();
const controller = require('../controllers/controller.js');

router.get('/toDos', controller.getToDos);
router.post('/toDos', controller.saveToDo);

module.exports = router;
