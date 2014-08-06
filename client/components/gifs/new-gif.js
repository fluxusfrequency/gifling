/**
 * @jsx React.DOM
 */

var React = require('react');

var NewGif = React.createClass({
  render: function() {
    return (
      <div className="new-gif">
        <h2>Make A Gif</h2>
        <input type="text" />
        <button className="pure-button">MAKE GIF</button>
      </div>
    );
  }
});

module.exports = NewGif;

