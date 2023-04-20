use ecomercegt;
db.createCollection('usuarios');
db.createCollection('articulos');
db.createCollection('ventas');
db.createCollection('carritos');

db.usuarios.insertMany([
    {
        user: 'Jose',
        email: 'jose@mail.com',
        password: '$2a$10$BcZafXoDf6JnSJWacWO4i.eEXkkW9hDtIj7p5kg4Z.6bPU5huv2qK',
        role: 'USUARIO'
    },
    {
        user: 'Andrea',
        email: 'andrea@mail.com',
        password: '$2a$10$Go/q6amLf87tknmQr3piAu5Ux/RCwkGaG9q8jtvQFYw7gC69byev6',
        role: 'USUARIO'
    },
    {
        user: 'Edgar',
        email: 'edgar@mail.com',
        password: '$2a$10$HrauJabxT8rHGZuLM3L3XOkmWlCFzMpQwofopBD66tY8urFroeFHG',
        role: 'USUARIO'
    },
    {
        user: 'LuisP',
        email: 'luisp@mail.com',
        password: '$2a$10$9XMUmUR3mFeI31T2zEqHrO3QXO3IPmKSW8BspbdYxbka9dZs1FSYe',
        role: 'USUARIO'
    },
    {
        user: 'DanielA',
        email: 'daniela@mail.com',
        password: '$2a$10$8SF583jrPzDYtOmGX4.biOSXlCaYVOteDd.Ru7RR4fOgiE57FZ/nK',
        role: 'USUARIO'
    },
    {
        user: 'JosePaq',
        email: 'josepaq@mail.com',
        password: '$2a$10$B1SxIRW3trcwJYX8SvTtMONbBqON1ZG.6GrAmIv3REgzNi2Yww.pS',
        role: 'PAQUETERIA'
    },
    {
        user: 'GuillermoPaq',
        email: 'guillermopaq@mail.com',
        password: '$2a$10$I2DB/tPRqHkOr7oQHnlmP.V3MZmDvuQ7xmPfz15C78W.Vz3.dV5ga',
        role: 'PAQUETERIA'
    },
    {
        user: 'admin',
        email: 'admin_3@gmail.com',
        password: '$2a$10$9ftt6V9dvcGlQFyLk63oQOsY5VX/XY0YDLwp5IqvWIoEoSjlsPdEG',
        role: 'ADMIN'
    }
])

/*
{
    [
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
}
*/