const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const usuarioSchema = new Schema({
    user:String,
    email:String,
    password:String,
    role:String,
    token:String,
    card:Array
},
{
    versionKey:false
});

module.exports = model('usuario',usuarioSchema);