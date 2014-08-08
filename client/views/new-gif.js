var AmpersandView = require('ampersand-view');
var React = require('react');
var $ = require('jquery');

var NewGifComponent = require('../components/gifs/new-gif');

var NewGifView = AmpersandView.extend({
  initialize: function(scope) {
    var that = this;
    this.saveModel = function(url) {
      that.collection.create({
        '_url': url
      });
    };
    this.render();
  },

  render: function() {
    React.renderComponent(
      NewGifComponent({ saveModel: this.saveModel }),
      $('#new-gif').get(0)
    );
  }
});

module.exports = NewGifView;
