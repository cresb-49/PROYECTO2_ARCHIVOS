const articulo = require('../models/articulo');

const insertarArticulo = async (req, res) => {
    const insert = new articulo({
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria
    });

    const insertarArticulo = await insert();
    res.send(insertarArticulo);
}

const obtenerArticulo = async (req, res) => {

}

const eliminarArticulo = async (req, res) => {

}

const modificarArticulo = async (req, res) => {

}

const obtenerArticulos = async (req, res) => {

}

module.exports = {
    insertarArticulo: insertarArticulo,
    obtenerArticulo:obtenerArticulo,
    obtenerArticulos:obtenerArticulos,
    eliminarArticulo:eliminarArticulo,
    modificarArticulo:modificarArticulo
}