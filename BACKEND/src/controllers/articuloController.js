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
    try {
        const insertarArticulo = await insert();
        res.send(insertarArticulo);
    } catch (error) {
        res.send({'error':error});
    }
}

const obtenerArticulo = async (req, res) => {
    console.log('Obtener Articulo');
    res.send('Obtener Articulo');
}

const eliminarArticulo = async (req, res) => {
    console.log('Eliminar Articulo');
    res.send('Eliminar Articulo');
}

const modificarArticulo = async (req, res) => {
    console.log('Modificar Articulo');
    res.send('Modificar Articulo');
}

const obtenerArticulos = async (req, res) => {
    const articulos = await articulo.find();
    res.send(articulos);
}

module.exports = {
    insertarArticulo: insertarArticulo,
    obtenerArticulo: obtenerArticulo,
    obtenerArticulos: obtenerArticulos,
    eliminarArticulo: eliminarArticulo,
    modificarArticulo: modificarArticulo
}