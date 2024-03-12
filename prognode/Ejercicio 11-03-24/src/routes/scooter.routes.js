const express = require('express');
const scooterRouter = express.Router();

const { getScooter, getScooters, createScooter } = require('../controller/scooter.controller');

scooterRouter.get('/:_id', getScooter);
scooterRouter.get('/', getScooters);
scooterRouter.post('/', createScooter);




module.exports = { scooterRouter }