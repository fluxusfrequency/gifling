Gifling.Router.map(function() {
  this.resource('gifs', { path: '/' });
});

Gifling.GifsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('gif');
  },

  setupController: function() {
    this.controllerFor('folders').set('model', this.store.find('folder'));
    return this.controllerFor('gifs').set('model', this.store.find('gif'));
  },

  renderTemplate: function() {
    this.render();
    this.render('folders', {
      into: 'application',
      outlet: 'folders',
      controller: 'folders'
    });
  }
});
