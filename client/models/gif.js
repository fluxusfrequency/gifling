var AmpersandModel = require('ampersand-model');

var GifModel = AmpersandModel.extend({
  parse: function(response) {
    return response;
  }
});

module.exports = GifModel;
