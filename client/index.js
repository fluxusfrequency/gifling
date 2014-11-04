var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create({ LOG_TRANSITIONS: true });

Gifling.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: function(type) {
    return '_id';
  }
});

Gifling.ApplicationAdapter = DS.RESTAdapter.extend({
  serializer: Gifling.ApplicationSerializer,
  namespace: 'api/v1'
});

Gifling.ApplicationStore = DS.Store.extend({
  adapter: 'Gifling.ApplicationAdapter'
});

require('./models');
require('./controllers');
require('./views');
require('./router');

