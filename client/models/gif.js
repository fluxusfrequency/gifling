var AmpersandModel = require('ampersand-model');

var GifModel = AmpersandModel.extend({
  props: {
    url: 'string'
  },

  parse: function(response) {
    response.id = response._id;
    return response;
  }
});

module.exports = GifModel;
