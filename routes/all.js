var express = require('express'),
    router = express.Router(),
    path = require('path'),
    route_files = ['index', 'albums'];

route_files.forEach(function(file) {
  require(path.resolve(path.dirname(__dirname), 'routes/' + file))(router);
});

module.exports = router;