const express = require('express');

const sessionController = require('../controllers/sessionController');
const autorizacion = require('../middlewares/autorizacion');

const router = express.Router();

router.post('/login',sessionController.login);


module.exports = router;