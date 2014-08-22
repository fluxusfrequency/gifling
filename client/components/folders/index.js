/**
 * @jsx React.DOM
 */

var React = require('react');
var FoldersList = require('./folders-list');

var Folders = React.createClass({
  render: function() {
    var folders = this.props.folders;
    var total = this.props.gifs.length;
    return (
      <div className="folders-container">
        <h2>All the folders</h2>
        <FoldersList folders={folders} total={total} />
      </div>
    );
  }
});

module.exports = Folders;

