var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ventaSchema = new Schema({
    
    compradorId: { type: String, required:true },
    
    vendedorId: { type: String, required:true  },
    
    nombreProducto: { type: String, required:true },
    
    cantidad:{ type: Number, required:true  },

    fecha:{ type: Date, required:true  }

},{versionKey:false});

module.exports = mongoose.model('Venta', ventaSchema,'Venta');