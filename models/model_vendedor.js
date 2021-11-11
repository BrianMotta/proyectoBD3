var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var vendedorSchema = new Schema({
    ruc : {type: String},
    nombre : {type: String},
    email : {type: String},
    telefono : {type: String},
    edad : {type: String}
}, {versionKey: false});

module.exports = mongoose.model('Vendedor', vendedorSchema, 'Vendedor')
