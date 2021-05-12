const {Schema, model} = require('mongoose');

const TodoSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    note: String,
    impact: Number,
    completed: Boolean
});

module.exports = model('Todo', TodoSchema);
