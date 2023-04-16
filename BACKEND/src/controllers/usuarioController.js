const usuario = require('../models/usuario');
const handleBcrypt = require('../helpers/handleBcrypt');

const insertarUsuario = async (req, res) => {
    try {
        const password = await handleBcrypt.encrypt(req.body.password);
        const insert = new usuario(
            {
                user: req.body.user,
                password: password,
                role: req.body.role
            }
        )
        let insertarUsuario = await insert.save();
        res.status(200);
        res.send(insertarUsuario);
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

const actualizarUsuario = async (req, res) => {
    console.log('Modificacion de usuario');
    res.send('Modificacion de usuario');
}

const obtenerUsuario = async (req, res) => {
    console.log('Obtener info usuario');
    res.send('Obtener info usuario');
}

const eliminarUsuario = async (req, res) => {
    console.log('Eliminacion de usuario');
    res.send('Eliminacion de usuario');
}

const obtenerUsuarios = async (req, res) => {
    const usuarios = await usuario.find();
    res.send(usuarios);
}

module.exports = {
    insertarUsuario: insertarUsuario,
    actualizarUsuario: actualizarUsuario,
    obtenerUsuario: obtenerUsuario,
    eliminarUsuario: eliminarUsuario,
    obtenerUsuarios: obtenerUsuarios
}
