const handleJwt = require('../helpers/handleJwt');
const handleBcrypt = require('../helpers/handleBcrypt');
const usuario = require('../models/usuario');

const login = async (req, res) => {
    try {
        const data = req.body;

        const resultUuser = await usuario.findOne({ user: data.user });
        if (!resultUuser) {
            res.status(400);
            res.send('Nombre de usuario incorrecto')
        }
        const isCorrectPassword = await handleBcrypt.compare(data.password, resultUuser.password);
        const token = await handleJwt.generate(resultUuser._id, resultUuser.user, resultUuser.role);

        if (isCorrectPassword) {
            res.status(200);
            res.send({
                data: resultUuser,
                token: token
            })
        } else {
            res.status(400);
            res.send('Nombre de usuario incorrecto')
        }

    } catch (error) {
        console.log(error);
        res.status(400);
        res.send(error.message)
    }
}

module.exports = {
    login: login,
}