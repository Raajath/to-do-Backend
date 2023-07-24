const mongoose = require('mongoose');
//DB Schema
const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ToDo', todoSchema);