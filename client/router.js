Gifling.Router.map(function() {
  this.resource('gifs', { path: '/' });
});

Gifling.GifsRoute = Ember.Route.extend({
  model: function() {
    Gifling.Gif.find();
  }
});
