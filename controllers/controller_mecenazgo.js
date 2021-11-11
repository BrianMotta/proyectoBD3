var mongoose = require('mongoose'),

mecenazgo = mongoose.model('Mecenazgo');

exports.mecenazgos = function(req, res) {

    mecenazgo.find({}, function(err, p) {

    if (err)

      res.send(err);

    res.json(p);

  });

};

exports.addMecenazgo = function(req, res) {

    var mecenazgo_nuevo = new mecenazgo(req.body);
    console.log(req.body);
    mecenazgo_nuevo.save(function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  };


  exports.updateMecenazgo = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    mecenazgo.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json(p);
  
    });
  
  };


  exports.deleteMecenazgo = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.id);
  
    mecenazgo.remove({_id: id}, function(err, p) {
  
      if (err)
  
        res.send(err);
  
      res.json({ message: 'Mecenazgo successfully deleted' });
  
    });
  
  };