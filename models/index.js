let mongoose = require('mongoose');
let config = require('../config');
var options = { promiseLibrary: require('bluebird') };

var db = mongoose.createConnection(config.mongoUrl, options);

db.on('open', function() {
    cb(db);
});

module.exports = db;