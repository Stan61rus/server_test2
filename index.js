const express = require("express");  
const app = express();


app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index.hbs');
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });