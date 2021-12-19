var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({

    nombre : {type: String, required:true},

    ruc : {type: String, required:true},

    correo : {type: String, required:true},
    
    telefono : {type: Number, required:true},

}, {versionKey: false});

module.exports = mongoose.model('Usuario', usuarioSchema, 'Usuario')