const express = require('express');

const artiuloController = require('../controllers/articuloController');

const router = express.Router();

router.get('/img', artiuloController.obtenerImagen);

module.exports = router;