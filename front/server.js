var express = require('express');
var morgan = require('morgan');
var path = require('path');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:filename', routes.partials);
app.use(routes.index);

module.exports = app;
