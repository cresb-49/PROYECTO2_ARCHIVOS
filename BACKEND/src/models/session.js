const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const sessionSchema = new Schema({
    usuario:String,
    key:String,
    valid:Boolean
},
{
    versionKey:false
});

module.exports = model('session',sessionSchema);