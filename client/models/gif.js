var AmpersandModel = require('ampersand-model');

var GifModel = AmpersandModel.extend({
  props: {
    url: 'string'
  },

  parse: function(response) {
    return response;
  }
});

module.exports = GifModel;
