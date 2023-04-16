const express = require('express');

const artiuloController = require('../controllers/articuloController');
const autorizacion = require('../middlewares/autorizacion');

const router = express.Router();

router.post('/articulo',artiuloController.insertarArticulo);

router.put('/articulo',artiuloController.modificarArticulo);

router.get('/articulo',artiuloController.obtenerArticulo);

router.delete('/articulo',autorizacion.auth,artiuloController.eliminarArticulo);

router.get('/articulos',artiuloController.obtenerArticulos);

module.exports = router;