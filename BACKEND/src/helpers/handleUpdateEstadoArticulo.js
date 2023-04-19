const articulo = require('../models/articulo');


const venderProducto = async (req, res, next) => {
    const filter = { _id: req.body.articulo };
    const update = { vendido: true };

    try {
        const r1 = await articulo.findOne(filter);
        if (r1.vendido) {
            res.status(409);
            res.send({ error: 'Este producto ya fue vendido' })
        } else {
            try {
                let result = await articulo.findOneAndUpdate(filter, update);
                next();
            } catch (error) {
                res.status(409);
                res.send({ error: error.message })
            }
        }
    } catch (error) {

        res.status(409);
        res.send({ error: error.message })
    }

}

module.exports = venderProducto;