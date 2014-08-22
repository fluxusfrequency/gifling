/**
 * @jsx React.DOM
 */

var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var parameterize = require('../../utilities/parameterize');
var BackboneEvents = require('backbone-events-standalone');

var Folder = React.createClass({
  mixins: [BackboneEvents],
  componentDidMount: function() {
    var $folderLinkNode = $(this.getDOMNode()).find('a');
    var folderId = this.props.folderId;
    var saveGifToFolder = function(e, ui) {
      var gifId = ui.draggable.attr('id');
      return BackboneEvents.trigger('addGifToFolder', gifId, folderId);
    };

    $folderLinkNode.droppable({
      hoverClass: 'drop-active',
      tolerance: 'pointer',
      drop: saveGifToFolder
    });
  },

  handleClick: function() {
    $('.active').removeClass('active');
    $(this.getDOMNode()).addClass('active');
  },

  render: function() {
    var cssClass;
    if (this.props.options) {
      cssClass = this.props.options.cssClass;
    }
    var link = '/#/folder/' + parameterize(this.props.name);
    return (
      <div className={cssClass}>
        <a href={link} className='folder' onClick={this.handleClick}>
          <span>{this.props.name} ({this.props.count})</span>
        </a>
      </div>
    );
  }
});

module.exports = Folder;


