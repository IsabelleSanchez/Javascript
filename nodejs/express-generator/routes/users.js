var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Olá você está na rota raiz de usuários!');
  res.render('users', { nome: 'Belle' })
});

module.exports = router;
