Gifling.FoldersController = Ember.ArrayController.extend({
  actions: {
    createFolder: function() {
      var name = this.get('newFolderName');
      if (!name) { return false; }
      if (!name.trim()) { return; }

      var folder = this.store.createRecord('folder', {
        name: name
      });

      this.set('newFolderName', '');

      folder.save();
    }
  }
});

