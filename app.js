var express = require('express');
var naamController = require('./controllers/naamController');

var app = express();



app.set('view engine', 'ejs');




app.use(express.static('./public'));

//controllers

naamController(app);

//port

app.listen(5000);

console.log('Port 5000');