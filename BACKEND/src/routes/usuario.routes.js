const express = require('express');

const usuarioControler = require('../controllers/usuarioController');
const existsUser = require('../middlewares/existsUser');

const router = express.Router();

router.post('/usuario',existsUser.verificarUsuario,usuarioControler.insertarUsuario);

router.put('/usuario',usuarioControler.actualizarUsuario);

router.get('/usuario',usuarioControler.obtenerUsuario);

router.delete('/usuario',usuarioControler.eliminarUsuario);

router.get('/usuarios',usuarioControler.obtenerUsuarios);

module.exports = router;