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

function parameterize(name) {
  var slug = name;
  slug = slug.replace(/[^-\w\s]/g, '');  // remove unneeded chars
  slug = slug.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
  slug = slug.replace(/[-\s]+/g, '-');   // convert spaces to hyphens
  slug = slug.toLowerCase();
  return slug;
}

var MainView = AmpersandView.extend({
  initialize: function() {
    this.gifs = new Gifs();
    this.folders = new Folders();

    this.currentGifs = this.gifs.models;
    this.currentFolder = null;

    this.injector = {
      gifs: this.currentGifs,
      folders: this.folders.models
    };

    this.router = new Router(this.injector);
    this.router.history.start({ pushState: false });

    this.listenTo(this.router, 'route:inFolder', function() {
      var folderName = _.last(this.router.history.fragment.split('/'));
      this.currentFolder = folderName;
      this.filterGifs(folderName);
      this.gifs.trigger('sync');
    });

    this.newGif = new NewGifView({ collection: this.gifs });

    this.syncComponent(GifsComponent, 'gifs');
    this.syncComponent(FoldersComponent, 'folders');
  },

  filterGifs: function(folderName) {
    var folder = this.folders.find(function(folder) {
      return parameterize(folder.name) === this.currentFolder;
    }, this);
    var ids = folder.gifs;
    this.currentGifs = _.filter(this.gifs.models, function(gif) {
      return _.contains(ids, gif._id);
    }, this);
    debugger;
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
