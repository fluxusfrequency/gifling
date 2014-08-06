var mongoose = require('mongoose');

var dbUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/gifling';
var Connection = function() {
  return mongoose.connect(dbUri, function(err, res) {
    if (err) {
      console.log('Error connecting to ' + dbUri);
    } else {
      console.log('Connected to ' + dbUri);
    }
  });
};

module.exports = Connection;
