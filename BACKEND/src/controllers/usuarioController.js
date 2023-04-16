const usuario = require('../models/usuario');

const insertarUsuario = async (req, res) => {
    const insert = new usuario(
        {
            user: req.body.user,
            password: req.body.password,
            role: req.body.role
        }
    )
    let insertarUsuario = await insert.save();
    insertarUsuario.password = null;
    res.send(insertarUsuario);
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
    const usuarios = usuario.find();
    res.send(usuarios);
}

module.exports = {
    insertarUsuario: insertarUsuario,
    actualizarUsuario: actualizarUsuario,
    obtenerUsuario: obtenerUsuario,
    eliminarUsuario: eliminarUsuario,
    obtenerUsuarios: obtenerUsuarios
}
