/**
 * @jsx React.DOM
 */

var React = require('react');
var Folder = require('./folder');

var FoldersList = React.createClass({
  render: function() {
    var folders = this.props.folders.map(function(folder) {
      return <Folder name={folder.name} count={folder.gifs.length} />;
    });
    return (
      <div className="foldersList">
        {folders}
      </div>
    );
  }
});

module.exports = FoldersList;

