const articulo = require('../models/articulo');


const venderProducto = async (req, res, next) => {
    const ids = req.body.articulos;
    const update = { vendido: true };
    try {
        const articulos = await articulo.find({
            _id: {
                $in: ids
            },
            vendido: false
        }).select('-imagen');

        if (articulos.length === 0) {
            //Porductos que ya fuern vendidos y esta conbtenidos en los articulos de compra
            const articulos = await articulo.find({
                _id: {
                    $in: ids
                },
                vendido: true
            }).select('-imagen');
            let mensajes = [];
            for (const a of articulos) {
                mensajes.push('El articulo "' + a.nombre + '" ya fue vendido');
            }
            res.status(409);
            res.send({ error: mensajes });
        } else {
            for (const a of articulos) {
                await articulo.findOneAndUpdate({ _id: a._id }, update);
            }
            next();
        }
    } catch (error) {
        res.status(409);
        res.send({ error: error.message })
    }

}

module.exports = venderProducto;