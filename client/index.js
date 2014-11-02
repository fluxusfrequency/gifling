(function() {
  'use strict'

  var $ = require('jQuery');
  var Handlebars = require('handlebars');
  var Ember = require('ember');
  var EmberData = require('ember-data');

  window.Gifling = Ember.Application.create();

  Gifling.ApplicationAdapter = DS.RESTAdapter;
})();
