/**
 * @jsx React.DOM
 */

var React = require('react');
var Gif = require('./gif');

var GifsList = React.createClass({
  render: function() {
    var gifs = this.props.gifs.map(function(url) {
      return <Gif link={url} />;
    });
    return (
      <div className="gifsList">
        {gifs}
      </div>
    );
  }
});

module.exports = GifsList;
