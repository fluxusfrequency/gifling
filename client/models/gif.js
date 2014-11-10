Gifling.Gif = DS.Model.extend({
  src: DS.attr('string'),
  elementId: function() {
    return this.get('id');
  }.property('id')
});
