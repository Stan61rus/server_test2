const express = require("express");  
const app = express();
const bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index.hbs');
  });

app.get('/', function (req, res) {
  res.render('index.hbs');
  });

  app.post('/', function (req, res) {
    console.log(req.body)
    res.end()
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });