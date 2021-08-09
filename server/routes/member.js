var express = require('express');
const user = require('../controllers/member.controller.js');
var router  = express.Router();

router.post('/create', user.create);
router.post('/login', user.login);
router.get('/findAll', user.findAll);
router.post('/findCollaborators', user.findCollaborators);
router.put('/updateProject', user.updateProject);
router.post('/isAdmin', user.isAdmin)
module.exports = router;