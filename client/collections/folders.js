var AmpersandRestCollection = require('ampersand-rest-collection');

var FolderModel = require('../models/folder');

var Folders = AmpersandRestCollection.extend({
  url: '/api/folders',

  model: FolderModel,

  initialize: function() {
    this.fetch();
  },

  parse: function(response) {
    return response;
  }

});

module.exports = Folders;

