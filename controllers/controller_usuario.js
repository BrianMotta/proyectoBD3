var mongoose = require('mongoose'),

usuario = mongoose.model('Usuario');

exports.usuarios = function(req, res) {

    usuario.find({}, function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });

};

exports.addUsuario = function(req, res) {

    var usuario_nuevo = new usuario(req.body);
    console.log(req.body);
    usuario_nuevo.save(function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  };


  exports.updateUsuario = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    usuario.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  
  };


  exports.deleteUsuario = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    usuario.remove({_id: id}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json({ message: 'Usuario successfully deleted' });
  
    });
  
  };