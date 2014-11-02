var Gif = require('../models/gif');

var GifsController = function() {
  return {
    index: function(req, res) {
      Gif.find({}, function(err, gifs) {
        if (err) { res.json(err); }
        res.json(gifs);
      });
    },

    create: function(req, res) {
      var gif = new Gif({
        url: req.body.url
      });

      gif.save(function(err, _gif) {
        if(err) { res.json(err); }
        res.json(_gif);
      });
    }
  };
};

module.exports = GifsController;
