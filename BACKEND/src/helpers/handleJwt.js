const jwt = require('jsonwebtoken');
const config = require('../config')

const generate = async (id, user, role) => {
    const payload = { id, user, role };
    return jwt.sign(payload, config.PRIVATE_KEY, {
        expiresIn: 60*60, //TODO: cambiar el tiempo de duracion de los tokens
    });
};


const verify = async (token) => {
    try {
        return jwt.verify(token, config.PRIVATE_KEY);
    } catch (e) {
        return null
    }
}

module.exports = {
    generate: generate,
    verify: verify
}