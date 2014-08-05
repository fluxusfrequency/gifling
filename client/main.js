var $ = require('jquery');

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
      gifs: this.gifs
    };

    this.router = new Router(injector);
    this.router.history.start({ pushState: false });

    this.home = React.renderComponent(
      GifsComponent(injector),
      $('#gifs').get(0)
    );
    debugger;
  },

  render: function() {
    return this;
  },

});

module.exports = MainView;
