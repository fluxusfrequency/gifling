/**
 * @jsx React.DOM
 */

var React = require('react');
var FoldersList = require('./folders-list');
//var BackboneEvents = require('backbone-events-standalone');

var Folders = React.createClass({
  //mixins: [BackboneEvents],

  render: function() {
    var folders = this.props.folders;
    return (
      <div className="folders-container">
        <h2>All the folders</h2>
        <FoldersList folders={folders} />
      </div>
    );
  }
});

module.exports = Folders;

