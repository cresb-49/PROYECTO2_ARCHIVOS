const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const articuloSchema = new Schema({
    usuario:String,
    nombre:String,
    precio:Number,
    imagen:Object,
    descripcion:String,
    categoria:Array,
    aceptado: {
        type: Boolean,
        default: false
    },
    vendido: {
        type: Boolean,
        default: false
    }
},
{
    versionKey:false
});

module.exports = model('articulo',articuloSchema);