const Moto = require('../model/moto.model');

const getMoto = async (req, res, next) => {
    const _id = req.params._id;
    try {
        const moto = await Moto.findById(_id);
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: moto
        });
    } catch (error) {
        next(error);
    }
}

const getMotos = async (req, res, next) => {
    try {
        const motos = await Moto.find();
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: motos
        });
    } catch (error) {
        next(error);
    }
}

const createMoto = async (req, res, next) => {
    try {
        const moto = new Moto(req.body);
        await moto.save();
        res.status(201).json({
            status: 201,
            message: 'OK',
            data: moto
        });
    }catch (error) {
        next(error);
    }
}

module.exports = { getMoto, getMotos, createMoto } 