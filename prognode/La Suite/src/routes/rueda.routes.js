const express = require('express');
const ruedaRouter = express.Router();

const { getRueda, createRueda, updateRueda, deleteRueda } = require('../controllers/rueda.controller');

ruedaRouter.get('/:_id', getRueda);
ruedaRouter.post('/', createRueda);
// bikeRouter.patch('/', updateRueda);
// bikeRouter.delete('/', deleteRueda);

module.exports = { ruedaRouter };