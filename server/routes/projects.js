var express = require('express');
const projects = require('../controllers/projects.controller.js');
var router  = express.Router();

router.get('/findAll', projects.findAll);
router.post('/create', projects.create);
router.post('/getInfo', projects.getInfo);
router.put('/updateProject', projects.updateProject);
router.post('/removeProject', projects.removeProject);

module.exports = router;