const router = require('express').Router();
const Ctrl = require('../controllers/todo');

router.route('/')
    .get(Ctrl.getAll)
    .post(Ctrl.save);

router.route('/:id')
    .get(Ctrl.findTodoById)
    .delete(Ctrl.remove);

module.exports = router;
