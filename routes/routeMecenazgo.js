var express = require('express');

var router = express.Router();

var mecenazgo = require('../controllers/controller_mecenazgo');

router.get('/',mecenazgo.mecenazgos)

router.post('/agregarmecenazgo',mecenazgo.addMecenazgo);

router.put('/modificarmecenazgo',mecenazgo.updateMecenazgo);

router.delete('/eliminarmecenazgo',mecenazgo.deleteMecenazgo);

module.exports = router;