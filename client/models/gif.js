var AmpersandModel = require('ampersand-model');

var GifModel = AmpersandModel.extend({
  idAttribute: '_id',

  props: {
    _url: 'string'
  },

  parse: function(response) {
    response.id = response._id;
    return response;
  },

  url: '/api/gifs'

});

module.exports = GifModel;
