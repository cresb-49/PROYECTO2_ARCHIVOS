const express = require('express');

const carritoController = require('../controllers/carritoController');
const artiuloController = require('../controllers/articuloController')
const autorizacion = require('../middlewares/autorizacion');
const verificarCarrito = require('../middlewares/carritoExistis');

const router = express.Router();

router.post('/carrito', autorizacion.auth, carritoController.insertarCarrito);

router.put('/carrito/articulo', autorizacion.auth, verificarCarrito, carritoController.modificarCarrito);

router.delete('/carrito/articulos', autorizacion.auth, carritoController.eliminarCarrito);

router.delete('/carrito/articulo', autorizacion.auth, carritoController.eliminarArticuloCarrito);

router.get('/carrito', autorizacion.auth, carritoController.obtenerCarrito);


module.exports = router;