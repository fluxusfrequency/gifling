Gifling.Router.map(function() {
  this.route('index', { path: '/' });

  this.resource('gifs', function() {
    this.route('index');
  });
});

Gifling.IndexRoute = Ember.Route.extend({
  return this.transitionTo('gifs');
});

Gifling.GifsIndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    var gifs = this.get('store').find('gif');
    controller.set('content', locations);
  }

  renderTemplate: function() {
    this.render('gifs.index', { into: 'application' });
  }
});
