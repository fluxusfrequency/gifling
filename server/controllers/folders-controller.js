var Folder = require('../models/folder');

var FoldersController = function() {
  return {
    index: function(req, res) {
      return Folder.find({}, function(err, folders) {
        if (err) { res.json(err); }
        res.send(folders);
      });
    },
    update: function(req, res) {
      return Folder.update({ _id: req.body._id }, { gifs: req.body.gifs }, function(err, affected, folder) {
        if (err) { res.json(err); }
        res.send(folder);
      });
    }
  };
};

module.exports = FoldersController;

