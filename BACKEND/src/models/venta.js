const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const ventaSchema = new Schema({
    usuario:String,
    articulo:String,
    valor:Number,
    isCentro:Boolean,
    isCamino:Boolean,
    isHome:Boolean
},
{
    versionKey:false
});

module.exports = model('venta',ventaSchema);