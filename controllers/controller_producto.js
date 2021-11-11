var mongoose = require('mongoose'),

producto = mongoose.model('Producto');

exports.products = function(req, res) {

    producto.find({}, function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });

};

exports.add = function(req, res) {

  var producto_nuevo = new producto(req.body);
  console.log(req.body);
  producto_nuevo.save(function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });
};



exports.update = function(req, res) {

  var id = mongoose.Types.ObjectId(req.query.productId);

  producto.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });

};

exports.delete = function(req, res) {

  var id = mongoose.Types.ObjectId(req.query.productId);

  producto.remove({_id: id}, function(err, p) {

    if (err)

      res.send(err);

    res.json({ message: 'Product successfully deleted' });

  });

};