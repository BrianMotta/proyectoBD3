var express = require('express');

var router = express.Router();

var venta = require('../controllers/controller_venta');

router.get('/',venta.ventas);

router.post('/agregarventa',venta.addVenta);

router.put('/modificarventa',venta.updateVenta);

router.delete('/eliminarventa',venta.deleteVenta);

module.exports = router;