const express = require('express');
const skateboardRouter = express.Router();

const { getSkateboard, createSkateboard, updateSkateboard, deleteSkateboard } = require('../controllers/skateboard.controller');

skateboardRouter.get('/:_id',getSkateboard);
// skateboardRouter.patch('/',updateSkateboard);
skateboardRouter.post('/',createSkateboard);
// skateboardRouter.delete('/',deleteSkateboard);

module.exports = { skateboardRouter }