//importancion de constantes de config
const config = require('./config')

//Importando las libreria necesarias para express y la conexion a la base de datos
const express = require('express');
const mongoose = require('mongoose');

//Configuracion de las rutas
const usuarioRoutes = require('./routes/usuario.routes');
const articuloRoutes = require('./routes/articulo.routes');


//Inicio de la app express
const app = express();
app.use(express.json());

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

//Inicio de la conexion de la base de datos
start();

//Inicio del servidor con el puerto 3000
app.listen(config.port);
console.log('Servidor escuchando en puerto: ',config.port);