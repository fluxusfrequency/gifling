/**
 * @jsx React.DOM
 */

var React = require('react');
var Folder = require('./folder');
var $ = require('jquery');

var FoldersList = React.createClass({
  //componentDidMount: function() {
    //var element = this.getDOMNode().get(0);
    //$(element).droppable({
      //accept: function(draggable) {
        //return $(draggable).data('drag-type') === 'gif';
      //},
      //drop: function(event, ui) {
      //}
    //});
  //},
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

