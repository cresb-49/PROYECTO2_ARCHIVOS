const carrito = require('../models/carrito');

const verificarCarrito = async (req, res, next) => {
    const data = req.body;
    const result = await carrito.findOne({ usuario: data.usuario });
    if (result) {
        next();
    } else {
        let ps = [req.body.producto]
        const insert = new carrito({
            usuario: req.body.usuario,
            productos: ps
        });
        try {
            const insertarCarrito = await insert.save();
            res.status(200);
            res.send(insertarCarrito);
        } catch (error) {
            res.status(409);
            res.send({'error':error.message});
        }
    }
}

module.exports = verificarCarrito;