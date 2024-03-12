const Scooter = require('../model/scooter.model');

const getScooter = async (req, res, next) => {
    const _id = req.params._id;
    try {
        const scooter = await Scooter.findById(_id);
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: scooter
        });
    } catch (error) {
        next(error);
    }
}

const getScooters = async (req, res, next) => {
    try {
        const scooters = await Scooter.find();
        res.status(200).json({
            status: 200,
            message: 'OK',
            data: scooters
        });
    } catch (error) {
        next(error);
    }
}

const createScooter = async (req, res, next) => {
    try {
        const scooter = new Scooter(req.body);
        await scooter.save();
        res.status(201).json({
            status: 201,
            message: 'OK',
            data: scooter
        });
    }catch (error) {
        next(error);
    }
}




module.exports = { getScooter, getScooters, createScooter }  