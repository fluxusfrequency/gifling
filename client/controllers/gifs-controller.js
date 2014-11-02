Gifling.GifsController = Ember.ArrayController.extend({
  model: function() {
    return this.get('gifs');
  }
});
