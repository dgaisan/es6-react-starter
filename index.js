var express         = require('express');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');

var app             = express();
var $port           = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

/**
 * sending all requests to homepage
 */
app.use('/*', function(req, res) {
    res.redirect('/');
});

// starting up the server
app.listen($port, function() {
    console.log('Application Server is running on http://localhost:' + $port);
});