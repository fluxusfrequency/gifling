Gifling.FolderController = Ember.ObjectController.extend({
  actions: {
    addGif: function(gifId) {
      var folder = this.get('model');
      folder.get('gifs').push(gifId);
      folder.save();
    },
    removeFolder: function() {
      var folder = this.get('model');
      folder.deleteRecord();
      folder.save();
    }
  }
});
