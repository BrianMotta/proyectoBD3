var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

require('./models/model_producto');
require('./models/model_venta');
require('./models/model_usuario');
require('./models/model_mecenazgo');

var venta = require('./routes/routeVenta');
var usuario = require('./routes/routeUsuario');
var mecenazgo = require('./routes/routeMecenazgo'); 
var producto = require('./routes/routeProducto');
var conexion= require('./routes/routeConexion');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ventas', venta);
app.use('/users', usersRouter);
app.use('/productos', producto);
app.use('/usuarios', usuario);
app.use('/mecenazgo', mecenazgo);
app.use('/conexion', conexion);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports =app;






