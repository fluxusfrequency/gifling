var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create({ LOG_TRANSITIONS: true });

Gifling.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: function(type) {
    return '_id';
  }
});

require('./models');
require('./controllers');
require('./views');
require('./router');

Gifling.ApplicationAdapter = DS.RESTAdapter.extend({
  serializer: Gifling.ApplicationSerializer,
  namespace: 'api/v1'
});

Gifling.Store = DS.Store.extend({
  revision: 12,
  adapter: 'Gifling.ApplicationAdapter'
});

