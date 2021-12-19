var express = require('express');

var router = express.Router();

var conexion = require('../controllers/controller_conexion');

router.get('/conectar',conexion.conectar);

router.delete('/desconectar',conexion.desconectar);

module.exports = router;