var restify = require('restify'),
  config = require('npcp'),
  mongoose = require('mongoose');

var teachers = require('./routes/teachers');
  tests = require('./routes/tests');

mongoose.connect(config.db[config.env].uri);

var server = restify.createServer();

teachers.bind_routes(server);
tests.bind_routes(server);

server.listen(config.port, function () {
  console.log('%s listening at %s', server.name, server.url);
});