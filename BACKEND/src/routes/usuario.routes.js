const express = require('express');
const usuarioControler = require('../controllers/usuarioController');

const router = express.Router();

router.post('/usuario',usuarioControler.insertarUsuario);

router.put('/usuario',usuarioControler.actualizarUsuario);

router.get('/usuario',usuarioControler.obtenerUsuario);

router.delete('/usuario',usuarioControler.eliminarUsuario);

router.get('/usuarios',usuarioControler.obtenerUsuarios);

module.exports = router;