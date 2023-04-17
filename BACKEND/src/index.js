//Importar las variables de entorno a nivel local
require('dotenv').config();
//importancion de constantes de config
const config = require('./config')

//Importando las libreria necesarias para express y la conexion a la base de datos
const express = require('express');
const mongoose = require('mongoose');

//Configuracion de las rutas
const usuarioRoutes = require('./routes/usuario.routes');
const articuloRoutes = require('./routes/articulo.routes');
const sessionRoutes = require('./routes/session.routes');

//Inicio de la app express
const app = express();
app.use(express.json());

//Uso de CORS
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8080', //Permite la conexion del forntend 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//Funcion de inicio de la conexion de mongodb
async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/'+config.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log('Conectado a la base de datos: ',db.connection.name)
    } catch (error) {
        console.log(error);
    }
}

//Implementacion de las rutas

app.use('/api',usuarioRoutes);
app.use('/api',articuloRoutes);
app.use('/api',sessionRoutes);

//Inicio de la conexion de la base de datos
start();

//Inicio del servidor con el puerto 3000
app.listen(config.port);
console.log('Servidor escuchando en puerto: ',config.port);