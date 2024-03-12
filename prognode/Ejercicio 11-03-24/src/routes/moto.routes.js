const express = require('express');
const motoRouter = express.Router();

const { getMoto, getMotos, createMoto } = require('../controller/moto.controller');

motoRouter.get('/:_id', getMoto);
motoRouter.get('/', getMotos);
motoRouter.post('/', createMoto);




module.exports = { motoRouter }