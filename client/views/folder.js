Gifling.FolderView = Ember.View.extend({
  templateName: 'folder',

  didInsertElement: function() {
    this.$().droppable({
      hoverClass: 'drop-active',
      tolerance: 'pointer'
    });
  },

  drop: function(event, view) {
    var gifId = $(event.originalEvent.target.parentElement).attr('id');
    this.get('controller').send('addGif', gifId);
  }
});

