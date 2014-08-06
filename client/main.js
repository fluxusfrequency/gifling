var $ = require('jquery');
var _ = require('lodash');

var React = require('react');
window.React = React;

var AmpersandView = require('ampersand-view');

var Router = require('./router');
var Gifs = require('./collections/gifs');
var GifsComponent = require('./components/gifs');

var MainView = AmpersandView.extend({
  initialize: function() {
    this.gifs = new Gifs();

    var injector = {
      gifs: this.gifs.models
    };

    this.router = new Router(injector);
    this.router.history.start({ pushState: false });

    this.listenTo(this.gifs, 'sync', _.bind(function() {
      this.home = React.renderComponent(
        GifsComponent(injector),
        $('#gifs').get(0)
      );
    }, this));
  },

  render: function() {
    return this;
  },

});

module.exports = MainView;
