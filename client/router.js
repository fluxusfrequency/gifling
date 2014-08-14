var AmpersandRouter = require('ampersand-router');

var Router = AmpersandRouter.extend({
  initialize: function(options) {},

  routes: {
    ''            : 'home',
    'folder/:name': 'inFolder'
  },

  home: function() {},

  inFolder: function() {
  }

});

module.exports = Router;
