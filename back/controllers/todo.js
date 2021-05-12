const Todo = require('../models/todo');

const Ctrl = {};

Ctrl.getAll = async function (req, res) {
    await Todo.find( function (err, data) {
        (err) ? res.status(500).send(err): res.send(data);
    } );
}

Ctrl.save = async function (req, res) {
    let newTask = JSON.parse(req.query.newTask);
    if(!newTask._id){
        await Todo.create(newTask, function (err, post) {
            if (err) return res.send(err);
            res.json(post);
        });
    } else {
        await Todo.findByIdAndUpdate(newTask._id, newTask, function (err, data) {
            if (err) return res.send(err);
            res.json(data);
        })
    }
}

Ctrl.findTodoById = async function (req, res) {
    await Todo.findById(req.query.id, function (err, data) {
        if (err) return res.send(err);
        res.json(data);
    })
}

Ctrl.remove = async function (req, res) {
    await Todo.findByIdAndRemove(req.query.id, function (err, data) {
        if (err) return res.send(err);
        res.json(data);
    })
}

module.exports = Ctrl;
