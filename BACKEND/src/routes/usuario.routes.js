const express = require('express');
const usuario = require('../models/usuario');

const router = express.Router();

router.post('/',(req,res)=>{
    console.log('hola usuario');
    res.send('hola usuario');
});

module.exports = router;