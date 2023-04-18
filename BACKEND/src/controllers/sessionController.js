const handleJwt = require('../helpers/handleJwt');
const handleBcrypt = require('../helpers/handleBcrypt');
const usuario = require('../models/usuario');

const login = async (req, res) => {
    try {
        const data = req.body;
        const resultUuser = await usuario.findOne({ user: data.user });

        if (resultUuser === null) {
            res.status(400);
            res.send({ mensaje: 'Credenciales incorrectas' });
            return;
        }

        if (!resultUuser) {
            res.status(400);
            res.send({ mensaje: 'Nombre de usuario incorrecto' });
            return;
        }

        const isCorrectPassword = await handleBcrypt.compare(data.password, resultUuser.password);
        const token = await handleJwt.generate(resultUuser._id, resultUuser.user, resultUuser.role);

        await usuario.updateOne({
            _id: resultUuser._id
        },
            {
                $set: {
                    token: token
                }
            });
        if (isCorrectPassword) {
            res.status(200);
            res.send({
                data: { _id: resultUuser._id, user: resultUuser.user, role: resultUuser.role },
                token: token
            })
        } else {
            res.status(400);
            res.send({ mensaje: 'Contraseña incorrecta' })
        }

    } catch (error) {
        res.status(400);
        res.send({ mensaje: error.message })
    }
}

module.exports = {
    login: login,
}