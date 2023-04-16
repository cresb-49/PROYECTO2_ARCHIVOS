const express = require('express');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.post('/session', sessionController.insertarSession);

router.put('/session', sessionController.modificarSession);

router.get('/session', sessionController.obtenerSession);

router.delete('/session', sessionController.eliminarSession);

module.exports = router;