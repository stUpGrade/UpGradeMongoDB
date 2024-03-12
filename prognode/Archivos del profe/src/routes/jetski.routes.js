const express = require('express');
const jetskiRouter = express.Router();

const { getJetski, createJetski, updateJetski, deleteJetski } = require('../controllers/jetski.controller');

jetskiRouter.get('/', getJetski);
jetskiRouter.post('/', createJetski);
jetskiRouter.patch('/', updateJetski);
jetskiRouter.delete('/', deleteJetski);

module.exports = { jetskiRouter }