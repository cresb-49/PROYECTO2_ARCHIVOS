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

const obtenerEmpleados = async (req, res) => {
    let filter = { role: { $ne: "USUARIO" } }
    const usuarios = await usuario.find(filter).select('-password -token');
    res.send(usuarios);
}

const obtenerUsuario = async (req, res) => {
    const id = req.query.id;
    const user = await usuario.findOne({ _id: id }).select('-password -token -card -role');
    res.status(200).json(user)
}

const actualizarUsuario = async (req, res) => {
    const data = req.body;
    try {
        const user = await usuario.findOne({ _id: data.id });
        const usertmp = await usuario.findOne({ user: data.user });
        if (usertmp) {
            if (usertmp._id.equals(user._id)) {
                if (data.newPass.length > 0) {
                    const newPass = await handleBcrypt.encrypt(data.newPass);
                    const oldPass = data.oldPass;
                    const result = await handleBcrypt.compare(oldPass, user.password);
                    if (result) {
                        const up = {
                            email: req.body.email,
                            user: req.body.user,
                            password: newPass
                        }
                        const r = await usuario.findOneAndUpdate({ _id: data.id }, up);
                        res.status(200).json({ info: 'Informacion actualizada' });
                    } else {
                        res.status(409).json({ error: 'La contrasena antigua no es correcta' });
                    }
                } else {
                    const up = {
                        email: data.email,
                        user: data.user,
                    }
                    const r = await usuario.findOneAndUpdate({ _id: data.id }, up);
                    res.status(200).json({ info: 'Informacion actualizada' });
                }
            } else {
                res.status(409).json({ error: `El nombre de usuario "${data.user}" ya esta en uso` });
            }
        } else {
            if (data.newPass.length > 0) {
                const newPass = await handleBcrypt.encrypt(data.newPass);
                const oldPass = data.oldPass;
                const result = await handleBcrypt.compare(oldPass, user.password);
                if (result) {
                    const up = {
                        email: req.body.email,
                        user: req.body.user,
                        password: newPass
                    }
                    const r = await usuario.findOneAndUpdate({ _id: data.id }, up);
                    res.status(200).json({ info: 'Informacion actualizada' });
                } else {
                    res.status(409).json({ error: 'La contrasena antigua no es correcta' });
                }
            } else {
                const up = {
                    email: data.email,
                    user: data.user,
                }
                const r = await usuario.findOneAndUpdate({ _id: data.id }, up);
                res.status(200).json({ info: 'Informacion actualizada' });
            }
        }
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

module.exports = {
    insertarUsuario: insertarUsuario,
    actualizarUsuario: actualizarUsuario,
    obtenerUsuario: obtenerUsuario,
    eliminarUsuario: eliminarUsuario,
    obtenerUsuarios: obtenerUsuarios,
    obtenerCards: obtenerCards,
    newCard: newCard,
    eliminarCard: eliminarCard,
    obtenerEmpleados, obtenerEmpleados
}
