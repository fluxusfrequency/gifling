Gifling.GifView = Ember.View.extend({
  didInsertElement: function() {
    this.$('').draggable({ revert: true });
  }
});
