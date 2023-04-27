const express = require('express');

const reportesController = require('../controllers/reportesController');
const autorizacion = require('../middlewares/autorizacion');

const router = express.Router();

router.get('/reporte1',autorizacion.auth,reportesController.getReporte1);
router.get('/reporte2',autorizacion.auth,reportesController.getReporte2);
router.get('/reporte3',autorizacion.auth,reportesController.getReporte3);
router.get('/reporte4',autorizacion.auth,reportesController.getReporte4);
router.get('/reporte5',autorizacion.auth,reportesController.getReporte5);

module.exports = router;