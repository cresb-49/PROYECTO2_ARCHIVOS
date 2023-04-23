const express = require('express');

const artiuloController = require('../controllers/articuloController');
const autorizacion = require('../middlewares/autorizacion');
const { valideCreate } = require('../validators/articulo');

const router = express.Router();

router.post('/articulo', autorizacion.auth, valideCreate, artiuloController.insertarArticulo);

router.put('/articulo', autorizacion.auth, artiuloController.aceptarArticulo);

router.put('/articulo/modificar', autorizacion.auth, artiuloController.modifificarArticulo);

router.get('/articulo', artiuloController.obtenerArticulo);

router.get('/articulo/all', artiuloController.obtenerArticuloCompleto);

router.delete('/articulo', autorizacion.auth, artiuloController.eliminarArticulo);

router.get('/articulos', artiuloController.obtenerArticulos);

router.get('/articulos/usuario', artiuloController.obtenerArticulosUsuario);

router.get('/articulos/init', artiuloController.initData);

module.exports = router;