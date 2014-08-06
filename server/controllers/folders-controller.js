var Folder = require('../models/folder');

var FoldersController = function() {
  return {
    index: function(req, res) {
      return Folder.find({}, function(err, folders) {
        if (err) { res.json(err); }
        res.send(folders);
      });
    }
  };
};

module.exports = FoldersController;

