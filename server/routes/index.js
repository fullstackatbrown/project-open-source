
var express = require('express');
var router = express.Router();

// Dummy path.
router.get('/', function (req, res) {
  res.send('hello');
});

module.exports = router;