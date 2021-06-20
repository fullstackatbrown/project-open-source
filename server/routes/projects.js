var express = require('express');
const user = require('../controllers/projects.controller.js');
var router  = express.Router();

router.get('/findAll', user.findAll);
router.post('/create', user.create);

module.exports = router;