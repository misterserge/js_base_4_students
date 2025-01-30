var express = require('express');
var path = require('path');
var app = express();
var logger = require('./libs/log')(module);

// // view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render(
    'index',
    { title: 'Hi!' }
  );
});

app.use(function(req, res, next) {
  if (req.url === '/'){
    res.send('Hello World');
  }else{
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url === '/forbidden'){
    next(new Error('Access denied'));
  }else{
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url === '/test'){
    res.send('Test');
  }else{
    next();
  }
});

app.use(function(req, res) {
  res.send(404, 'Page not found');
});

app.use(function(err, req, res, next) {
  if (app.get('env') === 'development') {
    var errorHandler = express.errorHandler();
    errorHandler(err, req, res, next);
  } else {
    console.error(err.stack);
    res.send(500, 'Something broke!');
  }
});


var createError = require('http-errors');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



app.use(logger('dev'));
app.use(express.json());
var cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
