var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre : {type: String, Required:  'Product name cannot be left blank.'},
    ruc : {type: String, Required:  'Product name cannot be left blank.'},
    correo : {type: String, Required:  'Product name cannot be left blank.'},
    telefono : {type: String, Required:  'Product name cannot be left blank.'},
}, {versionKey: false});

module.exports = mongoose.model('Usuario', usuarioSchema, 'usuario')