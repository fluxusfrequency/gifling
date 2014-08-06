/**
 * @jsx React.DOM
 */

var React = require('react');

var Gif = React.createClass({
  render: function() {
    return (
      <div className="gif pure-u-1-2">
        <img src={this.props.link}/>
      </div>
    );
  }
});

module.exports = Gif;

