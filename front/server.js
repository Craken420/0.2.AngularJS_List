var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, '/src/views'));
// app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./app/'));

app.get('/', function(req, res) {
  res.sendFile('./app/index.html');
});

module.exports = app;
