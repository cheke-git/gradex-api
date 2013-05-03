var restify = require('restify'),
  bunyan = require('bunyan')
  config = require('npcp'),
  mongoose = require('mongoose');

var teachers = require('./routes/teachers'),
  tests = require('./routes/tests');

var log = bunyan.createLogger({
  name: 'gradex'
});

mongoose.connect(config.db[config.env].uri);

var server = restify.createServer({
  name: 'gradex',
  version: '0.1.0',
  log: log
});
server.use(restify.authorizationParser());
server.use(restify.requestLogger());
server.use(restify.queryParser({
  mapParams: false
}));
server.use(restify.jsonp());
server.use(restify.bodyParser({
  mapParams: false
}));
server.use(restify.gzipResponse());

teachers.bind_routes(server);
tests.bind_routes(server);

server.listen(config.port, function () {
  log.info('%s listening at %s', server.name, server.url);
});