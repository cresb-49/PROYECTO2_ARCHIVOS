const session = require('../models/session');

const insertarSession = async (req, res) => {
    console.log('Insertando session nuevo');
    res.send('Insertando session nuevo');
}

const modificarSession = async (req, res) => {
    console.log('Modificacion de session');
    res.send('Modificacion de session');
}

const obtenerSession = async (req, res) => {
    console.log('Obtener info session');
    res.send('Obtener info session');
}

const eliminarSession = async (req, res) => {
    console.log('Eliminacion de session');
    res.send('Eliminacion de session');
}

module.exports = {
    insertarSession:insertarSession,
    modificarSession,modificarSession,
    obtenerSession,obtenerSession,
    eliminarSession,eliminarSession
}