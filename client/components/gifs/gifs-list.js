/**
 * @jsx React.DOM
 */

var React = require('react');
var Gif = require('./gif');

var GifsList = React.createClass({
  render: function() {
    var gifs = this.props.gifs.map(function(gif) {
      return <Gif link={gif.url} />;
    });
    return (
      <div className="gifsList">
        {gifs}
      </div>
    );
  }
});

module.exports = GifsList;
