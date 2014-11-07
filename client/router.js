Gifling.Router.map(function() {
  this.resource('gifs', { path: '/' });
});

Gifling.GifsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('gif');
  },

  renderTemplate: function() {
    this.render();
    this.render('folders', {
      into: 'application',
      outlet: 'folders'
    });
  }

});

