Gifling.GifsController = Ember.ArrayController.extend({
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
