Gifling.GifController = Ember.ObjectController.extend({
  actions: {
    removeGif: function() {
      var gif = this.get('model');
      gif.deleteRecord();
      gif.save();
    }
  }
});

