const express = require('express');

const usuarioControler = require('../controllers/usuarioController');
const existsUser = require('../middlewares/existsUser');
const autorizacion = require('../middlewares/autorizacion');

const router = express.Router();

router.post('/usuario',existsUser.verificarUsuario,usuarioControler.insertarUsuario);

router.put('/usuario',autorizacion.auth,usuarioControler.actualizarUsuario);

router.post('/usuario/cards',autorizacion.auth,usuarioControler.obtenerCards);

router.delete('/usuario/card',autorizacion.auth,usuarioControler.eliminarCard);

router.post('/usuario/newcard',autorizacion.auth,usuarioControler.newCard);

router.delete('/usuario',usuarioControler.eliminarUsuario);

router.get('/usuarios',usuarioControler.obtenerUsuarios);

router.get('/usuario/empleados',autorizacion.auth,usuarioControler.obtenerEmpleados);

router.get('/usuario',autorizacion.auth,usuarioControler.obtenerUsuario);

module.exports = router;