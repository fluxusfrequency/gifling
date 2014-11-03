var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create();

require('./controllers');
require('./models');
require('./views');

Gifling.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

Gifling.ApplicationStore = DS.Store.extend({
  adapter: Gifling.ApplicationAdapter.create()
});

DS.RESTAdapter.reopen({
  host: 'http://localhost:8000'
});

