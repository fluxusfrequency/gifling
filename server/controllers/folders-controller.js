var Folder = require('../models/folder');

var FoldersController = function() {
  return {
    index: function(req, res) {
      Folder.find({}, function(err, folders) {
        if (err) { res.json(err); }
        res.send({folders: folders});
      });
    },

    create: function(req, res) {
      var folder = new Folder(req.body.folder);

      folder.save(function(err, _folder) {
        if(err) { res.json(err); }
        res.json(_folder);
      });
    },

    update: function(req, res) {
      return Folder.update({ _id: req.body._id }, { gifs: req.body.gifs }, function(err, affected, folder) {
        if (err) { res.json(err); }
        res.send(folder);
      });
    }

    destroy: function(req, res) {
      Folder.findOne(req.params.id, function(err, _folder) {
        _folder.remove(function(err, _folder) {
          if(err) { res.json(err); }
          res.json('Success');
        });
      });
    }
  };
};

module.exports = FoldersController;

