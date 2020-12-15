var createError = require('http-errors');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var estudiantesRouter = require('./routes/estudiantes');
var cursosRouter = require('./routes/cursos');
var inscripcionesRouter = require('./routes/inscripciones');
var peliculasRouter = require('./routes/peliculas');
var usuariosRouter = require('./routes/usuarios');
var comentariosRouter = require('./routes/comentarios');

var app = express();
//Inicializa base de datos a Mongo
var MongoServer = require("./config/db");
MongoServer();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());//express por bodyParser
app.use(bodyParser.urlencoded({ extended: false }));//express por bodyParser
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Configuración de Paths de funcionalidades
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/estudiantes', estudiantesRouter);  //
app.use('/cursos', cursosRouter);
app.use('/inscripciones', inscripcionesRouter);
app.use('/peliculas', peliculasRouter); 
app.use('/usuarios', usuariosRouter);
app.use('/comentarios', comentariosRouter);

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

module.exports = app;
