var config = require('npcp');

exports.bind_routes = function (server) {
  server.get(config.baseurl + '/tests', exports.index);
};

exports.index = function (req, res) {
  // TODO: Call route controller...
  res.json('ok');
};