var Gif = require('../models/gif');

var GifsController = function() {
  return {
    index: function(req, res) {
      Gif.find({}, function(err, gifs) {
        if (err) { res.json(err); }
        res.json({gifs: gifs});
      });
    },

    create: function(req, res) {
      var gif = new Gif(req.body.gif);

      gif.save(function(err, _gif) {
        if(err) { res.json(err); }
        res.json(_gif);
      });
    },

    destroy: function(req, res) {
      Gif.findOne(req.params.id, function(err, _gif) {
        _gif.remove(function(err, _gif) {
          if(err) { res.json(err); }
          res.json('Success');
        });
      });
    }
  };
};

module.exports = GifsController;
