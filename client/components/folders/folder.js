/**
 * @jsx React.DOM
 */

var React = require('react');

var Folder = React.createClass({
  render: function() {
    return (
      <div className="folder">
        <p>{this.props.name} ({this.props.count})</p>
      </div>
    );
  }
});

module.exports = Folder;


