/**
 * @jsx React.DOM
 */

var React = require('react');
var Folder = require('./folder');
var $ = require('jquery');

var FoldersList = React.createClass({
  render: function() {
    var folders = this.props.folders.map(function(folder) {
      var len = folder.gifs.length;
      return <Folder name={folder.name} count={len} folderId={folder._id} />;
    });

    var options = {
      cssClass: 'active'
    };

    var total = this.props.total;
    var allId = null;

    return (
      <div className="foldersList">
        <Folder name="All" count={total} options={options} folderId={allId} />
        {folders}
      </div>
    );
  }
});

module.exports = FoldersList;

