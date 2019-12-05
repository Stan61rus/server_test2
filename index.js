const express = require("express");  
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Подключаемся к БД
mongoose.connect('mongodb+srv://stan61rus:753538@cluster0-pmcuq.mongodb.net/test', {useNewUrlParser: true})
  .then(() => console.log('MongoDB start'))
  .catch(err => console.log(err));

// Создаем модель данных для хранения в монге
const User = mongoose.model('User', { email: String , phone: String });

// Настройки конструктора Handlebars
app.set('views', './views');
app.set('view engine', 'hbs');

// Показываем страничку по адресу
app.get('/', function (req, res) {
  res.render('index.hbs');
  });

app.post('/addUser', function (req, res) {
  const user = new User({ email: req.body.email , phone: req.body.phone });
  user.save().then(() => res.send('OK'));
});

// Запускаем приложение на порту 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });