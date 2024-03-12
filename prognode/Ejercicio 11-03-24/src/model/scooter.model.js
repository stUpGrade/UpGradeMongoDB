const mongoose = require('mongoose')

const scooterSchema = new mongoose.Schema({
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

const Scooter = mongoose.model('Scooter', scooterSchema);

module.exports = Scooter;
