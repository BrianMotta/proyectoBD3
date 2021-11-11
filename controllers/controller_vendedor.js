var mongoose = require('mongoose'),

vendedor = mongoose.model('Vendedor');

exports.vendedores = function(req, res) {

    vendedor.find({}, function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });

};

exports.addVendedor = function(req, res) {

    var vendedor_nuevo = new vendedor(req.body);
    console.log(req.body);
    vendedor_nuevo.save(function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  };


  exports.updateVendedor = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    vendedor.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  
  };


  exports.deleteVendedor = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    vendedor.remove({_id: id}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json({ message: 'Vendedor successfully deleted' });
  
    });
  
  };