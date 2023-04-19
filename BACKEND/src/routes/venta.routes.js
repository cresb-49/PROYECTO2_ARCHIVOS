const express = require('express');

const ventaController = require('../controllers/Ventacontroller');
const autorizacion = require('../middlewares/autorizacion');
const venderProducto = require('../helpers/handleUpdateEstadoArticulo')

const router = express.Router();

router.post('/venta',autorizacion.auth,venderProducto,ventaController.insertarVenta);

router.get('/ventas',autorizacion.auth,ventaController.obtenerVentas);
router.get('/ventas/all',autorizacion.auth,ventaController.getAllVentas);

router.get('/venta',autorizacion.auth,ventaController.obtenerVenta);


module.exports = router;