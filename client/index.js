var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create();

Gifling.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

Gifling.Store = DS.Store.extend({
  adapter: 'Gifling.ApplicationAdapter'
});

DS.RESTAdapter.reopen({
  host: 'http://localhost:8000'
});

require('./controllers');
require('./models');
require('./views');
