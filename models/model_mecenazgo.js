var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mecenazgoSchema = new Schema({

    mecenasId: { type: String, required:true },
    
    productorId: { type: String, required:true  },
    
    cantidadAbonada:{ type: Number, required:true  },
    
    fecha:{ type: Date, required: true }

}, {versionKey: false});

module.exports = mongoose.model('Mecenazgo', mecenazgoSchema,'Mecenazgo');