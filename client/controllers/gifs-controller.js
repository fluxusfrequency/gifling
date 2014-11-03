Gifling.GifsController = Ember.ArrayController.extend({
  actions: {
    createGif: function() {
      var url = this.get('newGifUrl');
      if (!url) { return false; }
      if (!url.trim()) { return; }

      var gif = this.store.createRecord('gif', {
        _url: url
      });

      this.set('newGifUrl', '');

      gif.save();
    }
  }
});
