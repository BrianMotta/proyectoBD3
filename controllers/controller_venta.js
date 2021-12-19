var mongoose = require('mongoose'),

venta = mongoose.model('Venta');

exports.ventas= function(req, res) {

    venta.find({}, function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });

};

exports.addVenta = function(req, res) {

    var venta_nuevo = new venta(req.body);
    venta_nuevo.save(function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  };
  
exports.updateVenta = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    venta.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  
  };
  

  exports.deleteVenta = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    venta.remove({_id: id}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json({ message: 'Comprador successfully deleted' });
  
    });
  
  };