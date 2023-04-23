#!/bin/bash

# Configuración de la conexión a MongoDB
HOST="localhost"
PORT="27017"
DATABASE="ecomercegt"

# Eliminación de la base de datos y creación de las colecciones
mongo --host $HOST --port $PORT --eval "db.dropDatabase();"
mongoimport --host $HOST --port $PORT --db $DATABASE --collection usuarios --file ./usuarios.json --jsonArray
mongoimport --host $HOST --port $PORT --db $DATABASE --collection articulos --file ./articulos.json --jsonArray

# Agrega aquí todas las colecciones que necesites crear

echo "Base de datos y colecciones eliminadas y recreadas exitosamente."

