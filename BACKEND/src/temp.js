const bycrypt = require('bcryptjs');

const { encrypt_value } = require('./config');

let usuarios = [
    {
        'user': 'Jose',
        'email': 'jose@mail.com',
        'password': 'pass123',
        'role': 'USUARIO'
    },
    {
        'user': 'Andrea',
        'email': 'andrea@mail.com',
        'password': 'pass456',
        'role': 'USUARIO'
    },
    {
        'user': 'Edgar',
        'email': 'edgar@mail.com',
        'password': 'pass789',
        'role': 'USUARIO'
    },
    {
        'user': 'LuisP',
        'email': 'luisp@mail.com',
        'password': 'pass101112',
        'role': 'USUARIO'
    },
    {
        'user': 'DanielA',
        'email': 'daniela@mail.com',
        'password': 'pass131415',
        'role': 'USUARIO'
    },
    {
        'user': 'JosePaq',
        'email': 'josepaq@mail.com',
        'password': 'pass161718',
        'role': 'PAQUETERIA'
    },
    {
        'user': 'GuillermoPaq',
        'email': 'guillermopaq@mail.com',
        'password': 'pass192021',
        'role': 'PAQUETERIA'
    },
    {
        'user': 'admin',
        'email': 'admin_3@gmail.com',
        'password': 'adminpass',
        'role': 'ADMIN'
    }

]

async function start(){
    for (let user of usuarios) {
        const hash = await bycrypt.hash(user.password, 10);
        user.password = hash;
    }
    console.log(usuarios);
}

start();


