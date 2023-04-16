const express = require('express');

const artiuloController = require('../controllers/articuloController');

const router = express.Router();

router.post('/articulo',artiuloController.insertarArticulo);

router.put('/articulo',artiuloController.modificarArticulo);

router.get('/articulo',artiuloController.obtenerArticulo);

router.delete('/articulo',artiuloController.eliminarArticulo);

router.get('/articulos',artiuloController.obtenerArticulos);

module.exports = router;