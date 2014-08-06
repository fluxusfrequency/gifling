/**
 * @jsx React.DOM
 */

var React = require('react');
var GifsList = require('./gifs-list');
//var BackboneEvents = require('backbone-events-standalone');

var Gifs = React.createClass({
  //mixins: [BackboneEvents],

  render: function() {
    var gifs = this.props.gifs;
    return (
      <div className="gifsContainer">
        <h1>All the gifs</h1>
        <GifsList gifs={gifs} />
      </div>
    );
  }
});

module.exports = Gifs;
