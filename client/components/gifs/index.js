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
      <div className="gifs-container">
        <h2>All the gifs</h2>
        <GifsList gifs={gifs} />
      </div>
    );
  }
});

module.exports = Gifs;
