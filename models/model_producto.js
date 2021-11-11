var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  nombre: { type: String, Required:  'Product name cannot be left blank.' },
  categoria: { type: String ,    Required:  'Product category cannot be left blank'},
  idVendedor: {type: String, Required: 'Cannot be left blank'}
  
}, {versionKey: false});

module.exports = mongoose.model('Producto', productSchema,'producto');