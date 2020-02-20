var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// MongoDB Questions Data List Import
const initialData = require('./dbData');
initialData.insertAllQuestions();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new FileStore(),
}));

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mainRouter = require('./routes/routers.js');

app.use(mainRouter);

app.listen(19000, 'localhost', () => {
  console.log('Server On');
});






