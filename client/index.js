var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create({ LOG_TRANSITIONS: true });

Gifling.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

Gifling.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:8000'
});

Gifling.Store = DS.Store.extend({
  adapter: 'Gifling.ApplicationAdapter'
});

require('./controllers');
require('./models');
require('./views');
