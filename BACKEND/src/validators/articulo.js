const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper')

const valideCreate = [
    check('usuario')
        .exists()
        .not()
        .isEmpty(),
    check('nombre')
        .exists()
        .not()
        .isEmpty(),
    check('precio')
        .exists()
        .isNumeric()
        .not()
        .isEmpty(),
    check('imagen')
        .exists()
        .custom((value, { req }) => {
            let result = value.split(',');
            if (result.length == 2) {
                let base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
                if(base64regex.test(result[1])){
                    return true;
                }
            }
            throw new Error('No se agrego una imagen adjunta');
        })
        .not()
        .isEmpty(),
    check('descripcion')
        .exists()
        .isString()
        .not()
        .isEmpty(),
    check('categoria')
        .exists()
        .isLength()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { valideCreate }