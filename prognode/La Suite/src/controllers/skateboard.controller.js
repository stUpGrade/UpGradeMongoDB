const Skateboard = require('../models/skateboard.model');

const getSkateboard = async (req, res, next) => {
    const _id = req.params._id;
    try {
        const skateboard = await Skateboard.findById(_id);
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: skateboard
        });
    } catch (error) {
        next(error);
    }
}

const createSkateboard = async (req, res, next) => {
    try {
        const skateboard = new Skateboard(req.body);
        await skateboard.save();
        res.status(201).json({
            status: 201,
            message: 'OK',
            data: skateboard
        });
    }catch (error) {
        next(error);
    }
}




module.exports = { getSkateboard, createSkateboard }  