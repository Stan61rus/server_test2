require('dotenv').config();
const express = require("express");  
const app = express();
const mongoose = require('mongoose');
const router = require('./router');
const bodyParser = require('body-parser');

// Настройки для рашифровки POST запросов
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Подключаемся к БД
mongoose.connect(process.env.MONGODB)
  .then(() => console.log('MongoDB start'))
  .catch(err => console.log(err));


// Роутер - обработчик запросов
app.use('/', router);

// Запускаем приложение на порту из ENV
app.listen(process.env.PORT, function () {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });