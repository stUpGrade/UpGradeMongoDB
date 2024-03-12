const Eje = require('../models/eje.model');

const getEje = async (req, res, next) => {
    const _id = req.params._id;
    try {
        const eje = await Eje.findById(_id);
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: eje
        });
    } catch (error) {
        next(error);
    }
}

const createEje = async (req, res, next) => {
    try {
        const eje = new Eje(req.body);
        await eje.save();
        res.status(201).json({
            status: 201,
            message: 'OK',
            data: eje
        });
    }catch (error) {
        next(error);
    }
}




module.exports = { getEje, createEje }  