const Todo = require('../models/todo');

const Ctrl = {};

Ctrl.getAll = async function (req, res) {
    await Todo.find( function (err, data) {
        (err) ? res.status(500).send(err): res.send(data);
    } );
}

Ctrl.save = async function (req, res) {
    await Todo.create(req.body, function (err, post) {
        if (err) return res.send(err);
        res.json(post);
    });
}

Ctrl.findTodoById = async function (req, res) {
    await Todo.findById(req.params.id, function (err, data) {
        if (err) return res.send(err);
        res.json(data);
    })
}

Ctrl.edit = async function (req, res) {
    await Todo.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) return res.send(err);
        res.json(data);
    })
}

Ctrl.remove = async function (req, res) {
    await Todo.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) return res.send(err);
        res.json(data);
    })
}

module.exports = Ctrl;
