Gifling.GifView = Ember.View.extend({
  templateName: 'gif',

  didInsertElement: function() {
    this.$().draggable({
      revert: true,
      opacity: 0.25
    });
  }
});
