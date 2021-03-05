//Express-HBS config
require('dotenv').config()
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var path = require('path');
var hbs = exphbs.create({partialsDir: 'views/partials/'});
var bodyParser = require('body-parser');

// import sequelize models
var db = require('./models');

var routes = require('./routes/index');
var myroute = require('./routes/myroute');

app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',  // nests all renders in main.hbs by default
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/')
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json());

app.use('/', routes);
app.use('/myroute', myroute);

// sync sequelize, use force = true to delete table if exists
db.sequelize.sync({force: true});

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});

module.exports = app;
