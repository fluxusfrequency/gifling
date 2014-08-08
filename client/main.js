var $ = require('jquery');
var _ = require('lodash');

var React = require('react');
window.React = React;

var AmpersandView = require('ampersand-view');

var Router = require('./router');
var Gifs = require('./collections/gifs');
var Folders = require('./collections/folders');
var GifsComponent = require('./components/gifs');
var NewGifView = require('./views/new-gif');
var FoldersComponent = require('./components/folders');

var MainView = AmpersandView.extend({
  initialize: function() {
    this.gifs = new Gifs();
    this.folders = new Folders();

    this.injector = {
      gifs: this.gifs.models,
      folders: this.folders.models
    };

    this.router = new Router(this.injector);
    this.router.history.start({ pushState: false });

    this.newGif = new NewGifView({ collection: this.gifs });

    this.syncComponent(GifsComponent, 'gifs');
    this.syncComponent(FoldersComponent, 'folders');
  },

  syncComponent: function(component, collection) {
    this.listenTo(this[collection], 'sync', _.bind(function(result) {
      this[collection + 'Component'] = React.renderComponent(
        component(this.injector),
        $('#' + collection).get(0)
      );
    }, this));
  },

  render: function() {
    return this;
  }
});


module.exports = MainView;
