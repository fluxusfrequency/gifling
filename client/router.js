(function() {
  'use strict';

  Gifling.Router.map(function() {
    this.resource('gifs');
  });

  Gifling.GifsRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('gif');
    }
  });

  Gifling.GifsIndexRoute = Ember.Route.extend({
    model: function() {
      return this.modelFor('gifs');
    }
  });

})();

