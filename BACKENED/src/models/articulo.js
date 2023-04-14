const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const articuloSchema = new Schema({
    nombre:String,
    precio:Number,
    imagen:Object,
    cantidad:Number,
    descripcion:String
});

module.exports = model('articulo',articuloSchema);