/**
 * @jsx React.DOM
 */

var React = require('react');
var Folder = require('./folder');

var FoldersList = React.createClass({
  render: function() {
    var total = 0;
    var folders = this.props.folders.map(function(folder) {
      var len = folder.gifs.length;
      total = total + len;
      return <Folder name={folder.name} count={len} />;
    });

    var options = {
      cssClass: 'active'
    };

    return (
      <div className="foldersList">
        <Folder name="All" count={total} options={options} />
        {folders}
      </div>
    );
  }
});

module.exports = FoldersList;

