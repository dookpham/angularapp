var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');

var server = express();
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Listening to port:', port);
});