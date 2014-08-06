var AmpersandModel = require('ampersand-model');

var FolderModel = AmpersandModel.extend({
  props: {
    name: 'string',
    gifs: 'array'
  },

  parse: function(response) {
    response.id = response._id;
    return response;
  }
});

module.exports = FolderModel;

