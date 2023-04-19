const express = require('express');

const ventaController = require('../controllers/Ventacontroller');
const autorizacion = require('../middlewares/autorizacion');
const venderProducto = require('../helpers/handleUpdateEstadoArticulo')

const router = express.Router();

router.post('/venta',autorizacion.auth,venderProducto,ventaController.insertarVenta);
router.get('/ventas',autorizacion.auth,ventaController.obtenerVentas);


module.exports = router;