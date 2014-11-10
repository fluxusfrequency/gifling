require('jquery-ui');
var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create({ LOG_TRANSITIONS: true });

Gifling.Store = DS.Store.extend({
  adapter: 'Gifling.ApplicationAdapter'
});

require('./serializers');
require('./models');
require('./controllers');
require('./views');
require('./router');

Gifling.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

