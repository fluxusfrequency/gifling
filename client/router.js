Gifling.Router.map(function() {
  this.resource('gifs');
});

Gifling.IndexRoute = Ember.Route.extend({
  return this.transitionTo('gifs');
});

Gifling.GifsRoute = Ember.Route.extend({
  model: function() {
    return Gifling.Gif.find();
  }
});
