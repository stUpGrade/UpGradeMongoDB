const express = require('express');
const ejeRouter = express.Router();

const { getEje, createEje, updateEje, deleteEje } = require('../controllers/eje.controller');

ejeRouter.get('/:_id',getEje);
// ejeRouter.patch('/',updateEje);
ejeRouter.post('/',createEje);
// ejeRouter.delete('/',deleteEje);

module.exports = { ejeRouter }