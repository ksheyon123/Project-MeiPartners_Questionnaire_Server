var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mainRouter = require('./routes/routers');

app.use(mainRouter);

app.listen(3000, function() {
    console.log('Server On');
});
