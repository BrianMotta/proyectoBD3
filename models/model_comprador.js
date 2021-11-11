var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var compradorSchema = new Schema({
    ruc: { type: String, Required:  'Product name cannot be left blank.' },
    nombre: { type: String, Required:  'Product name cannot be left blank.' },
    email: { type: String ,    Required:  'Product category cannot be left blank'},
    telefono : {type: String},
    edad : {type: String}
}, {versionKey: false});

module.exports = mongoose.model('Comprador', compradorSchema,'Comprador');