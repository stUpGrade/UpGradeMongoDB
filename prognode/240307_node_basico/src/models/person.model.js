const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    nif: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    }
})
const Person = mongoose.model('Person', personSchema);
module.exports = Person;