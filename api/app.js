var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Middleware
app.use((req, res, next) => {
  console.log(req.path,req.method)
  next()
})




app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api/index', indexRouter);
app.use('/users', usersRouter);

//connect to mongodb
mongoose.connect(process.env.REACT_APP_MONGOURI)
  .then(() => {
    //Set up listener
  app.listen(process.env.REACT_APP_PORT, () =>{
    console.log('connected to MongoDB & listening on port 4000')
})
  })
  .catch((error) => {
    console.log(error)
  })

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
