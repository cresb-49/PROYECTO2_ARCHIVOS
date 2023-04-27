const articulo = require('../models/articulo');
const venta = require('../models/venta');
const usuario = require('../models/usuario');

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const getReporte1 = async (req, res) => {
    try {
        const fechaInferior = req.query.fecha1;
        const fechaSuperior = req.query.fecha2;
        const result = await venta.aggregate([
            { $match: { fecha: { $gte: fechaInferior, $lte: fechaSuperior } } }
        ]);
        let ids = []
        for (const v of result) {
            for (const id of v.articulos) {
                ids.push(new ObjectId(id));
            }
        }
        const result2 = await articulo.aggregate([
            { $match: { _id: { $in: ids } } },
            { $sort: { precio: -1 } }
        ]).limit(10);
        res.status(200).json(result2);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getReporte2 = async (req, res) => {
    try {
        const fechaInferior = req.query.fecha1;
        const fechaSuperior = req.query.fecha2;
        const result = await venta.aggregate([
            { $match: { fecha: { $gte: fechaInferior, $lte: fechaSuperior } } },
            { $group: { _id: '$usuario', usuario: { $first: '$usuario' }, ganancia: { $sum: { $multiply: ['$valor', 0.05] } } } },
            { $sort: { ganancia: -1 } }
        ]).limit(5);
        res.status(200).json(result);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getReporte3 = async (req, res) => {
    try {
        const fechaInferior = req.query.fecha1;
        const fechaSuperior = req.query.fecha2;
        const result = await venta.aggregate([
            { $match: { fecha: { $gte: fechaInferior, $lte: fechaSuperior } } }
        ]);
        let ids = []
        for (const v of result) {
            for (const id of v.articulos) {
                ids.push(new ObjectId(id));
            }
        }
        const result2 = await articulo.aggregate([
            { $match: { _id: { $in: ids } } },
            { $group: { _id: '$usuario', usuario: { $first: '$usuario' }, count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]).limit(5);
        res.status(200).json(result2);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getReporte4 = async (req, res) => {
    try {
        const fechaInferior = req.query.fecha1;
        const fechaSuperior = req.query.fecha2;
        const result = await venta.aggregate([
            { $match: { fecha: { $gte: fechaInferior, $lte: fechaSuperior } } },
            { $group: { _id: '$usuario', usuario: { $first: '$usuario' }, count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]).limit(10);
        res.status(200).json(result);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

const getReporte5 = async (req, res) => {
    try {
        const result = await articulo.aggregate([
            { $match: { vendido: false } },
            { $group: { _id: '$usuario', usuario: { $first: '$usuario' }, count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]).limit(10);
        res.status(200).json(result);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

module.exports = {
    getReporte1: getReporte1,
    getReporte2: getReporte2,
    getReporte3: getReporte3,
    getReporte4: getReporte4,
    getReporte5: getReporte5
}