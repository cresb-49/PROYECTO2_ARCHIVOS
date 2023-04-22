const carrito = require('../models/carrito');

const insertarCarrito = async (req, res) => {
    const insert = new carrito({
        usuario: req.body.usuario,
    });
    try {
        const insertarCarrito = await insert.save();
        res.status(200);
        res.send(insertarCarrito);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const obtenerCarrito = async (req, res) => {
    let find = req.query;
    try {
        const result = await carrito.findOne(find);
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const eliminarCarrito = async (req, res) => {
    const usuario = req.body.usuario;
    const fillter = { usuario: usuario }
    try {
        const result = await carrito.updateOne(fillter, { $set: { productos: [] } });
        res.status(200);
        res.send(result)
    } catch (error) {
        res.status(409);
        res.send({ error: error.message });
    }
}

const eliminarArticuloCarrito = async (req, res) => {
    const data = req.body;
    try {
        const usuario = data.usuario;
        const producto = data.id;
        const carritoActualizado = await carrito.findOneAndUpdate(
            { usuario },
            { $pull: { productos: producto } },
            { new: true }
        );
        res.status(200);
        res.send(carritoActualizado);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const modificarCarrito = async (req, res) => {
    try {
        const insertarCarrito = await carrito.updateOne(
            { usuario: req.body.usuario },
            { $addToSet: { productos: req.body.producto } }
        );
        res.status(200);
        res.send(insertarCarrito);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

module.exports = {
    insertarCarrito: insertarCarrito,
    obtenerCarrito: obtenerCarrito,
    eliminarCarrito: eliminarCarrito,
    modificarCarrito: modificarCarrito,
    eliminarArticuloCarrito: eliminarArticuloCarrito
}