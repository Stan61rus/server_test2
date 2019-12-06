var express = require('express');
const app = express();
var router = express.Router();
const User = require('./models/user');
const crypto = require('./crypto')

// Настройки конструктора Handlebars
app.set('views', './views');
app.set('view engine', 'hbs');

// Отдает главную страницу
router.get('/', function (req, res) {
    res.render('index.hbs');
});

// Отдат страницу для получения номера телефона
router.get('/getPhoneNumber', function (req, res) {
    res.render('getPhoneNumber.hbs');
});

// Добавляет в базу юзера с зашифрованным E-mail (Если такого еще нет)
router.post('/addUser', async function (req, res) {
    const email = crypto.encrypt(new Buffer(req.body.email, "utf8"))
    const userInCollectin = await User.find({ email: email});
    if (userInCollectin.length == 0) {
        const user = new User({ email: email , phone: req.body.phone });
        user.save().then(() => res.send('Email добавлен'));
    } else {
        res.send('Email существует')
    }
  });

// Получает пользователя из БД и отпраляет на почту пользователя
router.post('/getPhoneNumber', async function (req, res) {
    const email = crypto.encrypt(new Buffer(req.body.email, "utf8"))
    const userInCollectin = await User.find({ email: email});
        if (userInCollectin.length !== 0) {
            console.log(userInCollectin[0].phone)
            // Тут мы оправим письмо
    } else {
        res.send('Email не существует')
    }
  });

module.exports = router;
