var express = require('express');

var router = express.Router();

var vendedor = require('../controllers/controller_vendedor');

router.get('/',vendedor.vendedores)

router.post('/agregarvendedor',vendedor.addVendedor);

router.put('/modificarvendedor',vendedor.updateVendedor);

router.delete('/eliminarvendedor',vendedor.deleteVendedor);

module.exports = router;