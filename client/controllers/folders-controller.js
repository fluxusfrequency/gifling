Gifling.FoldersController = Ember.ArrayController.extend({
  actions: {
    createFolder: function() {
      var name = this.get('newFolderName');
      if (!src) { return false; }
      if (!src.trim()) { return; }

      var folder = this.store.createRecord('folder', {
        name: name
      });

      this.set('newFolderName', '');

      folder.save();
    }
  }
});

