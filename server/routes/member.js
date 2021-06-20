var express = require('express');
const user = require('../controllers/member.controller.js');
var router  = express.Router();

router.post('/create', user.create);
router.post('/login', user.login);
router.get('/findAll', user.findAll);

module.exports = router;