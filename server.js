var express = require('express');
var app = express();
var bodyParser = require('body-parser');

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mainRouter = require('./routes/routers.js');

app.use(mainRouter);

app.listen(3000, function () {
    console.log('Server On');
});






