const usuario = require('../models/usuario');

const verificarUsuario = async (req, res, next) => {
    const data = req.body;
    const result = await usuario.findOne({ user: data.user });
    if (result) {
        res.status(400);
        res.send({ mensaje: 'Existe un usuario: "' + data.user + '" en el sistema' });
    } else {
        next();
    }
}

module.exports = {
    verificarUsuario: verificarUsuario
}