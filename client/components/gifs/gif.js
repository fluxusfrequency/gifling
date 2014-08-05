/**
 * @jsx React.DOM
 */

var React = require('react');

var Gif = React.createClass({
  render: function() {
    return (
      <div className="gifs">
        <img src={this.props.link}/>
      </div>
    );
  }
});

module.exports = Gif;

