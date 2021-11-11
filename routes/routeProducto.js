
var express = require('express');

var router = express.Router();

var product = require('../controllers/controller_producto');

router.get('/',product.products)

router.post('/agregarproducto',product.add);

router.put('/modificarproducto',product.update);

router.delete('/eliminarproducto',product.delete);

module.exports = router;