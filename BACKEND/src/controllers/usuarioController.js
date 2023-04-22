const usuario = require('../models/usuario');
const handleBcrypt = require('../helpers/handleBcrypt');

const insertarUsuario = async (req, res) => {
    try {
        if (!(req.body.password === req.body.password2)) {
            res.status(400);
            res.send('Las contrasenias no son iguales');
        } else {
            const password = await handleBcrypt.encrypt(req.body.password);
            const insert = new usuario(
                {
                    user: req.body.user,
                    email: req.body.email,
                    password: password,
                    role: req.body.role
                }
            )
            let insertarUsuario = await insert.save();
            res.status(200);
            res.send(insertarUsuario);
        }
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

const actualizarUsuario = async (req, res) => {
    console.log('Modificacion de usuario');
    res.send('Modificacion de usuario');
}

const obtenerUsuario = async (req, res) => {
    const usuario = req.body.usuario;
    console.log(usuario);
    res.send({ usuario: usuario })
}
const obtenerCards = async (req, res) => {
    const user = req.body.usuario;
    const filter = { user: user };

    try {
        const result = await usuario.findOne(filter).select('-password -token')
        res.status(200);
        res.send(result)
    } catch (error) {
        res.status(409);
        res.send({ error: error.message });
    }
}

const newCard = async (req, res) => {
    const card = req.body.card;
    const filter = { user: req.body.usuario }
    try {
        const result = await usuario.findOne(filter).select('-password -token');
        let cards = result.card;
        const objetoExistente = cards.find(objeto => objeto.numero === card.numero);
        if (objetoExistente) {
            res.status(409);
            res.send({ error: "Ya existe un tarjeta con el mismo número." });
        } else {
            cards.push(card);
            try {
                const newValue = { card: cards }
                await usuario.updateOne(filter, newValue);
                res.status(200);
                res.send(cards);
            } catch (error) {
                res.status(409);
                res.send({ error: error.message });
            }
        }
    } catch (error) {
        res.status(409);
        res.send({ error: error.message });
    }
}

const eliminarCard = async (req, res) => {
    const card = req.body.card;
    const filter = { user: req.body.user }
    try {
        const result = await usuario.findOne(filter).select('-password -token');
        let cards = result.card;
        let nuevaLista = cards.filter(objeto => objeto.numero !== card);
        try {
            const newValue = { card: nuevaLista }
            await usuario.updateOne(filter, newValue);
            res.status(200);
            res.send(nuevaLista);
        } catch (error) {
            res.status(409);
            res.send({ error: error.message });
        }
    } catch (error) {
        res.status(409);
        res.send({ error: error.message });
    }
}

const eliminarUsuario = async (req, res) => {
    console.log('Eliminacion de usuario');
    res.send('Eliminacion de usuario');
}

const obtenerUsuarios = async (req, res) => {
    const usuarios = await usuario.find();
    res.send(usuarios);
}

module.exports = {
    insertarUsuario: insertarUsuario,
    actualizarUsuario: actualizarUsuario,
    obtenerUsuario: obtenerUsuario,
    eliminarUsuario: eliminarUsuario,
    obtenerUsuarios: obtenerUsuarios,
    obtenerCards: obtenerCards,
    newCard: newCard,
    eliminarCard: eliminarCard
}
