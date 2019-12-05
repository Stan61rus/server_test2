var express = require('express');
const app = express();
var router = express.Router();
const User = require('./models/user');
const bodyParser = require('body-parser');

// Настройки конструктора Handlebars
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Показываем страничку по адресу
router.get('/', function (req, res) {
    res.render('index.hbs');
});

router.get('/getPhoneNumber', function (req, res) {
    res.render('getPhoneNumber.hbs');
});


router.post('/addUser', function (req, res) {
    const user = new User({ email: req.body.email , phone: req.body.phone });
    user.save().then(() => res.send('OK'));
  });
  

module.exports = router;