const articulo = require('../models/articulo');

const insertarArticulo = async (req, res) => {
    const insert = new articulo({
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria
    });
    try {
        const insertarArticulo = await insert.save();
        res.status(200);
        res.send(insertarArticulo);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const obtenerArticulo = async (req, res) => {
    let find = req.query;
    try {
        const result = await articulo.findById(find).select('-imagen');
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const obtenerArticuloCompleto = async (req, res) => {
    let find = req.query;
    try {
        const result = await articulo.findById(find);
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(409);
        res.send({ 'error': error.message });
    }
}

const eliminarArticulo = async (req, res) => {
    console.log('Eliminar Articulo');
    res.send('Eliminar Articulo');
}

const aceptarArticulo = async (req, res) => {
    const filter = { _id: (req.body.id === undefined ? req.query.id : req.body.id) }
    const update = { aceptado: (req.body.aceptado === undefined ? req.query.aceptado : req.body.aceptado) }
    try {
        const result = await articulo.findOneAndUpdate(filter, update);
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(409);
        res.send({ error: error.message });
    }
}

const modifificarArticulo = async (req, res) => {
    const filter = { _id: req.body.id }
    const update = req.body.articulo;
    try {
        const result = await articulo.findOneAndUpdate(filter, update);
        res.status(200);
        res.send(result);
    } catch (error) {
        res.status(409);
        res.send({ error: error.message });
    }
}

const obtenerArticulos = async (req, res) => {
    const nombre = (req.body.nombre === undefined ? req.query.nombre : req.body.nombre);
    if (nombre) {
        const articulos = await articulo.find({ "nombre": new RegExp(nombre, 'i') }, '-imagen');
        res.status(200).json(articulos);

    } else {
        const articulos = await articulo.find().select('-imagen');
        res.status(200).json(articulos);
    }
}

const obtenerArticulosUsuario = async (req, res) => {
    const usuario = (req.body.usuario === undefined ? req.query.usuario : req.body.usuario);
    try {
        const articulos = await articulo.find({ usuario: usuario }).select('-imagen');
        res.status(200).send(articulos);
    } catch (error) {
        res.status(409);
        res.send({ error: error.message });
    }
}

const obtenerImagen = async (req, res) => {
    const id = (req.body.id === undefined ? req.query.id : req.body.id);
    if (id !== undefined) {
        try {
            const result = await articulo.findOne({ _id: id }, '-usuario -nombre -precio -descripcion -categoria -aceptado -vendido');
            if (result) {
                res.setHeader('Content-Type', 'application/octet-stream');
                res.send(Buffer.from(result.imagen.split(',')[1], 'base64'));
            } else {
                res.setHeader('Content-Type', 'application/octet-stream');
                res.send(Buffer.from("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", 'base64'));
            }
        } catch (error) {
            res.setHeader('Content-Type', 'application/octet-stream');
            res.send(Buffer.from("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", 'base64'));
        }
    } else {
        res.setHeader('Content-Type', 'application/octet-stream');
        res.send(Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAAAAAAYHYteAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+MDDA06DQKyN3MAAABqdEVYdFJhdyBwcm9maWxlIHR5cGUgYXBwMQAKYXBwMQogICAgICAzNAo0OTQ5MmEwMDA4MDAwMDAwMDEwMDMxMDEwMjAwMDcwMDAwMDAxYTAwMDAwMDAwMDAwMDAwNTA2OTYzNjE3MzYxMDAwMArclT4MAAAK3klEQVR42u2baUPyuhKAz///JZIu7IuAr4gCiqioqIgLi6AsCorspe2ZSYoURZTDh7fcm/mg6SRNn6aZZDIJ/+hrI//8bQCOylE5KkflqByVo3JUjspROSpH5agclaNyVI7KUTkqR+Woo6fMSdosV7WxNVFfEw5imxHBedy1ImonQoSvcjC0HqqWFeaJXLQe6iA8r1EFklAsh1qyz21VwfliFdTRS7mEUoyS+ajiAc0vPb6uPBqshDquRN0ioSJ8Kyxf8sZr2t9DVTLORYyfiT13q7GugKrd2X8NSmFdlb+F2tlcihRYd1YaZVdALcoL+ubcLEfjL6FezeMhstu/uel3SfMy5dJfQr20fYXxporN3mjUfb5PuKyMSuxHLXWSq9T3ZWJVVOIrzgzzo5yTWBOV+J+oevjWarVHmFLzbmJJVFcZld3sjluWPbu3A52OvFZEFTPYTV/+iLQhiRR/h0slSayHSjbboHoOTtGiqGi4rIcqpGGCH+6aGzEFrqoSJ5ZDpRSVma7paoLqynqt6kAX+nSmZ4r3oHqwWw7V2QHN4ayh5UBVcxGroTrQiFJfUatOy7WqvQaaK9GMKj2AKi9bDlW8Ac2LeXYiQegT2qn1RgCSgPl/fDZtViLdwPDV/2NBVDf2gMHRxE8lcgYjAHnJeoOVQPZw1h9deOkyQAzcoJfVDltwYgUrOsNm1FrXyUTi8K6Nq9NBcqaEZVAF+Yy6fvpYUZiD3TuULIoqSIdtU7b2HBMFq6IKQuD6zVgIKM0z75dsK6ES0Ze4KFQq+fM9t0Csg5oT5gkRZLtdEuYGAuwrhVdWQK06l42ueN7+Eupod0lU4WilwOUqkcDn5YJW5M/7KqSrxVdr20Z09Tcix1orka4Yte7dxMKh8C8ktJXIr7rZsupewLj3O+mrKz7o/3XjkqNyVI7KUTnq/wLqqJDL5Up0K7+fh2SVqZUm6G+e3j5Nkt0bKFIe6+OHXI6lQHdH002jviJeFKdnA7RO7RY0hSZzDMalnEm+2Yibj9rx24hNvsUF8ovbRjaSmBreRdyijRCHN1mf2ditgt+0sT3U+9sbkLIFMCh4jyUJuTJKOODK5qxN7midBJwCaCRPhO7KDMIbUxfMll4KNUBwc+cZUb1EsB0CWicBHp+AW5KEuHJmJ7mKzmgEUNnxFelR19UUc2WztICaZhsEp+xzaJUA+ajKngXlYAsLTFiXRxVItDdFHSRQJXl8GIUkdvOG+SdU4Ry8w7AZlVUnENre4OZ68NLu9TpQ6aobqKLbR8V7uTyqIJ6NP1DvMfzgzr0P6gcS7lJ05qOKDoHsKHrDLkiOD9Q7uMPtJoJ0T3t8DCuPlPu9pz9Ekh2XGkN1VgdMlP+AKjhKE1QFF1JSloZ3djBZmI9qj4rE19KvBcGFbUxRR8iWTsInjyNF3QWpQAtzXk7vH98GRqs6m/pCWYxKgq9NhtqFf8TDoifXmHP0DWraQ6SiFidkOzlBbUCfkWtFaFrX8+T245lRhKJKWzsokVR/aVQP9sqDKkXVn11Qf4gNLSXQ2+LqXFT5NkLIyRvYzdmxgaqBUZFQvxuAYplJdPgaEpcHSZTMYGJW7NCbuW/9DpXsXcjQGvseiloHbhIeTVFj36A+pGFpem8ncjltoHZhYUtOdR3QSbBHyWmQW93aQLKNYGcGdeM/oMY6GHMURQFRX8EqiJ99mnusNql/g/ogCY4dsLu3EwO1AG8spQqFQ6hJhi6ewUEqw1AxGTJQpb3kpJWXRlXaxj4k9NUBJh2PmKkdYbNkv0N990IuWpCBamwIsjMiZF/RS4BOdoe6dhKJbppQXS19oSxCHekPbNcJUFkP23nTdKXkhpSz8R0qG4vEa83oqw3zdpDgetHfMdIhX0Lbqf2MaEJ9XQVVZfsQOK626KAQPD6jJz3IofINakm/pJG0xgT1jNaAQl/7QteyWKkcOT072rZjq3YZqpw8Y3Kr/QdUvUfjUoiqPXjoREi7F4mag76fUJ+ccHO4b6B2Q9hgB0cgCQT709cHSdyJByOiU6v9dDQ7AmyE1WVQ0V3ZQ3tv+KBC6q5oj9uyMUm7UjNGOnVXbEQq6b1NuPlIVY9t6K7k8fUOaDv1t0ADBfRBxjuZ8J2xioLjqs3kriyF2osHQ8E03YbIh0Oh4AV91ODxPBoKhRLZl9m6XkAZTI30YSoY2qrq2lkwFH6A7xwMhfJqBv6GH2g57QrSwSt87dfbFNQbPsw2aEcaJiFnIsHkMqj6GMRwg6bJGb1JaJGxkQsg6vSfSnVjo/Oppts1k57dOZX5TGu/CrCkcFSOui7CUTnqF3nNF0CoQ/IMybzxK4ROMV/I12CyUauofWBLAn1UhIuyomsNvG12a0qpYMmKMf28Fz7ksUc1TbylNSmt1fPTEvn6Z/9qDuo4QX2HIyyaQ2djh0JpV6jFqEPLiwXsZVb8DZwYm7+jK/voKd3PVFVzYlTFZfi2eWG6iRXEUxhaGiu6+HixuNlpiSs/ozZpRIH4sYHa6A26cZ1JD/wRNz71mq1mD1ljte0sGKEcEOPE2oeo7DwQOdcMVNPWoHynGSvCKWrCfKDoF6japYj7z+w4knqMt13T4BUuBGOAN9xmNXpff0Ltsp1NEuxOUSWXy4Vnr8j2aD6qw8UkNf4RFc8biT4MAw3pJ8QUviD67uIdJB4dUJ97sshfhIrngZxOtvgzUG07nc77Dd7iH85Fle46TL4sBr+iVuCd/TnEqetse5q4m1BPFBKb79jQkNjHP5HhYlS6ADzeJ+wQloEam7w/6Oahyt+eGfiCqsITycE7HuU6we9+K7Ll6TP24FPQtKHFxeITvsvTYlQMc8hVaFrifpmgEnc8HgtAnZt1fS6quBVHiaXaP6Ji4Ee6wcUbPSnHDAuWwmhLTmzna3iO920YBvWJughVo3X03uHVhMuPvkrYetD/qM1HnaywmC0vQsUfzmFsCpfE9Ll0NedqjrEj7MKoNYzg91f1DAZg24tQe0Eomda1FF0VfkKVw2VtRdQBmvdmsZxHw9pDc6ph8PG65TY46CnPg0rlHExGulmEir9xkU4q5SP4DPaSqQPE6Zra21ixA8ycQaZjNx1PdzG2MDGq6dgHHeMTal6fefBHyaRimNUeVolhK3K6mlmNZ0/HoxnRQK7DA1fH1KjMBRy1z6hZNtJ0x9SopuJpmUYADX+p8xGySRu3KGOK+vhL1DcfmfQWwgIf099VIZd+K310J0yktVlUwc7G70AdO7MpqiJeGR0gkM1mjz2CqVWNW7wPFFVMZqlc3f4wW9E5c2sfBQ1XKlJLZnMONSr8uaJ9F/P37CzOPotqfG9nle4GOGNYMorxtO2BMbEa7MRdnzmIS+TC2GxWNnd/ISqNcjieDWrwGfZw7K476DlPtKEn9E126PuOolAWpq+23eSuTMRZLYoYVaGL/l4YcuSy2V0hxH2jGu6KIVJhbHZXyA+ojS2/37/PYtOtkN/vi6AdjpI+UEfQfclCwp9jhW8g6UuPO1gu2tPHp1jKkK3aOVxtst8Ga5j2XWrlwCQ7lMw0cFzNTu/wByvqiakG//ZgIao6BDH6iDbCC9osCqZGHynVVBh8DvpPM/IMGanmkmNWrWrK1qYZE1FnaqBVLhysLCwclaOui3BUjrouwlE56roIR+Wo6yIclaOui3BUjrouwlE56roIR+Wo6yIclaOui3BUjrouskao/wKL/V6Dxo15NgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMy0xMlQxMzo1ODoxMy0wNDowMJF+esEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDMtMTJUMTM6NTg6MTMtMDQ6MDDgI8J9AAAAAElFTkSuQmCC", 'base64'));
    }
}

module.exports = {
    insertarArticulo: insertarArticulo,
    obtenerArticulo: obtenerArticulo,
    obtenerArticulos: obtenerArticulos,
    eliminarArticulo: eliminarArticulo,
    aceptarArticulo: aceptarArticulo,
    obtenerImagen: obtenerImagen,
    obtenerArticulosUsuario: obtenerArticulosUsuario,
    modifificarArticulo: modifificarArticulo,
    obtenerArticuloCompleto: obtenerArticuloCompleto
}