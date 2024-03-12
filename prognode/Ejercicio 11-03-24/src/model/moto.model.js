const mongoose = require('mongoose')

const motoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    }
});

const Moto = mongoose.model('Moto', motoSchema);

module.exports = Moto;