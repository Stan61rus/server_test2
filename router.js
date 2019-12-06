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

router.post('/addUser', function (req, res) {
    console.log(req.body)
    const user = new User({ email: req.body.email , phone: req.body.phone });
    user.save().then(() => res.send('OK'));
  });

module.exports = router;