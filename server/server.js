// Express-HBS config.
require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

// Import sequelize models.
var db = require('./models');

var routes = require('./routes/index');
var memberRoute = require('./routes/member');
var projectsRoute = require('./routes/projects');

// Set routes.
app.use('/', routes);
app.use('/member', memberRoute);
app.use('/projects', projectsRoute);

// Sync sequelize, use force = true to delete table if exists.
db.sequelize.sync({force: false});

// Listen!
app.listen(process.env.PORT, function () {
  console.log(`Server listening on port ${process.env.PORT}`);
});