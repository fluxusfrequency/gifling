/**
 * @jsx React.DOM
 */

var React = require('react');
var GifsList = require('./gifs-list');

var Gifs = React.createClass({

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
