const express = require('express');
const motobikeRouter = express.Router();

const extractMotobike = '../controllers/motobike.controller';
const { getMotobike, createMotobike, updateMotobike, deleteMotobike } = require(extractMotobike);

motobikeRouter.get('/', getMotobike);
motobikeRouter.post('/', createMotobike);
motobikeRouter.patch('/', updateMotobike);
motobikeRouter.delete('/', deleteMotobike);

module.exports = { motobikeRouter }