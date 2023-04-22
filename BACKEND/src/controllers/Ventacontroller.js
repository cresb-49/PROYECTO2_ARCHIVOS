const venta = require('../models/venta');
const articulo = require('../models/articulo');

const insertarVenta = async (req, res) => {
    const ids = req.body.articulos;
    const articulos = await articulo.find({ _id: { $in: ids } }).select('-imagen');
    let valor = 0;
    for (const a of articulos) {
        valor = valor + a.precio;
    }
    valor = valor.toFixed(2);
    const insert = new venta({
        usuario: req.body.usuario,
        card: req.body.usuario,
        articulos: req.body.articulos,
        valor: valor,
        isCentro: req.body.isCentro,
        isCamino: req.body.isCamino,
        isHome: req.body.isHome
    });
    try {
        const insertarVenta = await insert.save();
        res.status(200);
        res.send(insertarVenta);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}
const obtenerVentas = async (req, res) => {
    const filter = { usuario: (req.body.usuario === undefined ? req.query.usuario : req.body.usuario) };
    try {
        let data = []
        const result = await venta.find(filter);
        for (const v of result) {
            const filter = { _id: v.articulo };
            const r = await articulo.findOne(filter).select('-imagen');
            data.push({ articulo: r, venta: v });
        };
        res.status(200);
        res.send(data);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const getAllVentas = async (req, res) => {
    try {
        let data = []
        const result = await venta.find();
        for (const v of result) {
            const filter = { _id: v.articulo };
            const r = await articulo.findOne(filter).select('-imagen')
            data.push({ articulo: r, venta: v });
        };
        res.status(200);
        res.send(data);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const modificarEstados = async (req, res) => {
    const filter = { _id: (req.body.id === undefined ? req.query.id : req.body.id) }
    const update = {
        isCentro: (req.body.isCentro === undefined ? req.query.isCentro : req.body.isCentro),
        isCamino: (req.body.isCamino === undefined ? req.query.isCamino : req.body.isCamino),
        isHome: (req.body.isHome === undefined ? req.query.isHome : req.body.isHome)
    }
    try {
        let result = await articulo.findOneAndUpdate(filter, update);
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }

}

const obtenerVenta = async (req, res) => {
    const filter = { _id: (req.body.id === undefined ? req.query.id : req.body.id) };
    try {
        //console.log(filter);
        const result = await venta.findOne(filter);
        const filter2 = { _id: result.articulo };
        const r2 = await articulo.findOne(filter2)
        let data = { articulo: r2, venta: result };
        res.status(200);
        res.send(data);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}


module.exports = {
    insertarVenta: insertarVenta,
    obtenerVentas: obtenerVentas,
    modificarEstados: modificarEstados,
    obtenerVenta: obtenerVenta,
    getAllVentas: getAllVentas
}