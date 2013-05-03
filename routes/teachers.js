var config = require('npcp');
var base_url = config.baseurl + '/teachers';

exports.bind_routes = function (server) {
  server.get(base_url, exports.index);
  server.post(base_url, exports.create);
  server.get(base_url + '/:id', exports.read);
  server.put(base_url + '/:id', exports.update);
  server.del(base_url + '/:id', exports.del);
  server.post(base_url + '/:id/login', exports.login);
  server.post(base_url + '/:id/logout', exports.logout);
  server.post(base_url + '/:id/recover', exports.recover);
};

exports.index = function (req, res) {
  res.json('ok');
};

exports.create = function (req, res) {

};

exports.read = function (req, res) {

};

exports.update = function (req, res) {

};

exports.del = function (req, res) {

};

exports.login = function (req, res) {

};

exports.logout = function (req, res) {

};

exports.recover = function (req, res) {

};