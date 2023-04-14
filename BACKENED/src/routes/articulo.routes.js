const express = require('express');
const articulo = require('../models/articulo');

const router = express.Router();

router.post('/articulo',(req,res)=>{
    console.log('hola articulo');
    res.send('hola articulo');
});

module.exports = router;