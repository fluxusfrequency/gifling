/**
 * @jsx React.DOM
 */

var React = require('react');
var $ = require('jquery');
var BackboneEvents = require('backbone-events-standalone');
var URL_TEST = /^(https?):\/\/.+\.(gif|jpg)$/

var NewGif = React.createClass({
  mixins: [BackboneEvents],

  handleClick: function(e) {
    var $input = $(this.getDOMNode()).find('input');
    var url = $input.val();

    if (!URL_TEST.test(url)) { return false };

    this.props.saveModel(url);
    return false;
  },

  render: function() {
    return (
      <div className="new-gif">
        <h2>Make A Gif</h2>
        <input type="text" />
        <button className="pure-button" onClick={this.handleClick}>MAKE GIF</button>
      </div>
    );
  }
});

module.exports = NewGif;

