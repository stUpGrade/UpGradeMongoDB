const express = require('express');
const bikeRouter = express.Router();

const { getBike, createBike, updateBike, deleteBike } = require('../controllers/bike.controller');

bikeRouter.get('/',getBike);
bikeRouter.patch('/',updateBike);
bikeRouter.post('/',createBike);
bikeRouter.delete('/',deleteBike);

module.exports = { bikeRouter }