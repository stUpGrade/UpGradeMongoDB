const mongoose = require('mongoose');

const skateplazaSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        unique: true,
    },
    skatebowls: {
        type: mongoose.Schema.types.ObjectId,
        ref: "Skatebowl"
    },
})
const Skateplaza = mongoose.model('Skateplaza', SkateplazaSchema);
module.exports = Skateplaza;