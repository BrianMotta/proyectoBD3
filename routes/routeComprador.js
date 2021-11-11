var express = require('express');

var router = express.Router();

var comprador = require('../controllers/controller_comprador');

router.get('/',comprador.compradores)

router.post('/agregarcomprador',comprador.addComprador);

router.put('/modificarcomprador',comprador.updateComprador);

router.delete('/eliminarcomprador',comprador.deleteComprador);

module.exports = router;

