const mongoose  = require('mongoose');
const createSchema = new mongoose.Schema({
    Task : String,
    completed : Boolean,
});

module.exports = mongoose.model('Todos', createSchema);