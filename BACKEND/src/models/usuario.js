const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const usuarioSchema = new Schema({
    user:String,
    password:String,
    role:String,
    carrito:Array
},
{
    versionKey:false
});

module.exports = model('usuario',usuarioSchema);