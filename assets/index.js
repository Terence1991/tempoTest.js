var fs = require('fs');
var http = require('http');
var path = require('path');

var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);

// For http
httpServer.listen(3000);

app.get('/', function (req, res) {
    res.send('HEY FUCK YOU BUDDY')
});