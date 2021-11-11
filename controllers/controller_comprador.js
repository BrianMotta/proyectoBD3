var mongoose = require('mongoose'),

comprador = mongoose.model('Comprador');

exports.compradores = function(req, res) {

    comprador.find({}, function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });

};

exports.addComprador = function(req, res) {

    var comprador_nuevo = new comprador(req.body);
    console.log(req.body);
    comprador_nuevo.save(function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  };


  exports.updateComprador = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    comprador.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  
  };


  exports.deleteComprador = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    comprador.remove({_id: id}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json({ message: 'Comprador successfully deleted' });
  
    });
  
  };