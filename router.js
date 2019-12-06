var express = require('express');
const app = express();
var router = express.Router();
const User = require('./models/user');

// Настройки конструктора Handlebars
app.set('views', './views');
app.set('view engine', 'hbs');

// Показываем страничку по адресу
router.get('/', function (req, res) {
    res.render('index.hbs');
});

router.get('/getPhoneNumber', function (req, res) {
    res.render('getPhoneNumber.hbs');
});

router.post('/addUser', async function (req, res) {
    const userInCollectin = await User.find({ email: req.body.email});
    if (userInCollectin.length == 0) {
        const user = new User({ email: req.body.email , phone: req.body.phone });
        user.save().then(() => res.send('Email добавлен'));
    } else {
        res.send('Email существует')
    }
  });

router.post('/getPhoneNumber', async function (req, res) {
    const userInCollectin = await User.find({ email: req.body.email});
        if (userInCollectin.length !== 0) {
            // Тут мы оправим письмо
    } else {
        res.send('Email не существует')
    }
  });

module.exports = router;
