var path = require('path');
var Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums'));

module.exports = function(router) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { albums: Albums.get() });
  }); 
};
