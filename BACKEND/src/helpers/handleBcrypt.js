const { encrypt_value } = require('../config')

const bycrypt = require('bcryptjs');


const encrypt = async (text) => {
    const hash = await bycrypt.hash(text, encrypt_value);
    return hash;
}

const compare = async (password, hashPassword) => {
    return await bycrypt.compare(password,hashPassword);
}

module.exports={
    encrypt:encrypt,
    compare:compare
}