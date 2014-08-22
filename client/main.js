var $ = require('jquery');
window.jQuery = $;
var _ = require('lodash');

var React = require('react');
window.React = React;

var AmpersandView = require('ampersand-view');
var BackboneEvents = require('backbone-events-standalone');

var Router = require('./router');
var Gifs = require('./collections/gifs');
var Folders = require('./collections/folders');
var GifsComponent = require('./components/gifs');
var NewGifView = require('./views/new-gif');
var FoldersComponent = require('./components/folders');

var parameterize = require('./utilities/parameterize');

var MainView = AmpersandView.extend({
  mixins: [ BackboneEvents ],

  initialize: function() {
    var self = this;

    this.gifs = new Gifs();
    this.folders = new Folders();

    this.currentGifs = this.gifs.models;

    this.currentFolder = null;
    this.newGif = new NewGifView({ collection: this.gifs });

    this.updateInjector = function() {
      self.injector = {
        gifs: self.currentGifs,
        folders: self.folders.models
      };
    };

    this.updateInjector();

    this.router = new Router(this.injector);
    this.router.history.start({ pushState: false });

    this.syncComponent(GifsComponent, 'gifs');
    this.syncComponent(FoldersComponent, 'folders');

    BackboneEvents.on('addGifToFolder', function(gifId, folderId) {
      var folder = _.find(self.folders.models, function(model) {
        return model._id === folderId;
      });
      folder.gifs.push(gifId);
      _.uniq(folder.gifs);
      folder.save();
    });

    this.listenTo(this.router, 'route:inFolder', function() {
      var folderName = _.last(this.router.history.fragment.split('/'));
      this.currentFolder = folderName;
      this.filterGifs();
      this.updateInjector();
      this.gifs.trigger('sync');
    });
  },

  filterGifs: function() {
    if (this.currentFolder === 'all') {
      this.currentGifs = this.gifs.models;
      return;
    }

    var folder = this.folders.find(function(folder) {
      return parameterize(folder.name) === this.currentFolder;
    }, this);
    var ids = folder.gifs;
    this.currentGifs = _.filter(this.gifs.models, function(gif) {
      return _.contains(ids, gif._id);
    }, this);
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
