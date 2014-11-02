var Ember = require('ember');
var DS = require('ember-data');

window.Gifling = Ember.Application.create();

Gifling.ApplicationAdapter = DS.RESTAdapter;
