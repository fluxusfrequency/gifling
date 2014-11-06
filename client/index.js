var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create({ LOG_TRANSITIONS: true });

Gifling.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

Gifling.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

//Gifling.ApplicationAdapter = DS.FixtureAdapter;

Gifling.ApplicationStore = DS.Store.extend({
  adapter: 'Gifling.ApplicationAdapter'
});

require('./models');
require('./controllers');
require('./views');
require('./router');

