// 1. LLAMAR AL MODELO
const Rueda = require('../models/rueda.model');

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, PATCH, DELETE)

// localhost:3000/room/65e0e8046d04e8604e3d8f36
const getRueda = async (req, res, next) => {
    // ¿Qué voy a consultar? -> id
    const _id = req.params._id; // obtengo la id
    // consulto en base de datos
    try {
        const rueda = await Rueda.findById(_id);
        // le devolvemos los datos al usuario
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: rueda
        });
    } catch (error) {
        next(error);
    }
}

const createRueda = async (req, res, next) => {
    try {
        const rueda = new Rueda(req.body);
        await rueda.save();
        res.status(201).json({
            status: 201,
            message: 'OK',
            data: rueda
        });
    }catch (error) {
        next(error);
    }
}

module.exports = { getRueda, createRueda }