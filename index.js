const express = require("express");  
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Подключаемся к БД
mongoose.connect('mongodb+srv://stan61rus:753538@cluster0-pmcuq.mongodb.net/test')
  .then(() => console.log('MongoDB start'))
  .catch(err => console.log(err));

// Настройки конструктора Handlebars
app.set('views', './views');
app.set('view engine', 'hbs');

// Роутер - обработчик запросов
app.use('/', router);

// Запускаем приложение на порту 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });