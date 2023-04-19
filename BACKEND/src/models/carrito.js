const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const carritoSchema = new Schema({
    usuario:String,
    productos:Array
},
{
    versionKey:false
});

module.exports = model('carrito',carritoSchema);