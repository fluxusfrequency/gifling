var AmpersandRestCollection = require('ampersand-rest-collection');

var GifModel = require('../models/gif');

var Gifs = AmpersandRestCollection.extend({
  url: '/api/gifs',

  model: GifModel,

  initialize: function() {
    this.fetch();
  },

  parse: function(response) {
    return response;
  }

});

module.exports = Gifs;
