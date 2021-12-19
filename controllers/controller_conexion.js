var mongoose=require('mongoose');

exports.conectar= function(req, res) {

    mongoose.connect('mongodb+srv://'+ req.query.usuario +':' + req.query.clave +'@cluster0.aw6la.mongodb.net/bd3?retryWrites=true&w=majority');
    res.json('conexion lograda');
};

exports.desconectar= function(req, res) {

    mongoose.connection.close();
    res.json('conexion terminada');
};