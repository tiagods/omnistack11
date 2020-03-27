var express = require('express');
var routes = require('./routes')
var cors = require('cors');

var app = express();

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(3333);