var express = require('express');

var router = express.Router();

var usuario = require('../controllers/controller_usuario');

router.get('/',usuario.usuarios)

router.post('/agregarusuario',usuario.addUsuario);

router.put('/modificarcusuario',usuario.updateUsuario);

router.delete('/eliminarusuario',usuario.deleteUsuario);

module.exports = router;