Gifling.GifsController = Ember.ArrayController.extend({
  queryParams: ['folder'],

  folder: null,

  filteredGifs: function() {
    var folder = this.get('folder');
    var gifs = this.get('model');


    if (folder) {
      return gifs.filter(function(gif) {
        return gif.get('folders').contains(folder);
      });
    } else {
      return gifs;
    }
  }.property('folder', 'model'),

  actions: {
    createGif: function() {
      var src = this.get('newGifSrc');
      if (!src) { return false; }
      if (!src.trim()) { return; }

      var gif = this.store.createRecord('gif', {
        src: src
      });

      this.set('newGifSrc', '');

      gif.save();
    }
  }
});
