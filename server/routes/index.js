var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('content', {
        note: "test"
    });
});

module.exports = router;
