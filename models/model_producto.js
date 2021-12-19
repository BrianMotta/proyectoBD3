var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  nombre: { type: String, required:true },

  categoria: { type: String , required:true },

  precio:{type: Number, required:true},

  unidadDeMedida:{type: String, required:true},

  puntuacionTotal:{type: Number, default:5},

  votacionTotal:{type: Number, default:1},

  comentarios:[{cuerpo:String , fecha:Date}], 
  
  idVendedor: { type: String , required:true}
  
}, {versionKey: false});

module.exports = mongoose.model('Producto', productSchema,'Producto');