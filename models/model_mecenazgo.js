var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mecenazgoSchema = new Schema({
    mecenasId: { type: String, Required:  'Product name cannot be left blank.' },
    productorId: { type: String, Required:  'Product name cannot be left blank.' },
}, {versionKey: false});

module.exports = mongoose.model('Mecenazgo', mecenazgoSchema,'Mecenazgo');