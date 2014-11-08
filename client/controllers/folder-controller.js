Gifling.FolderController = Ember.ObjectController.extend({
  actions: {
    removeFolder: function() {
      var folder = this.get('model');
      folder.deleteRecord();
      folder.save();
    }
  }
});
