/**
 * @jsx React.DOM
 */

var React = require('react');
var $ = require('jquery');

var Folder = React.createClass({
  handleClick: function() {
    console.log(this.props.name);
    $('.active').removeClass('active');
    $(this.getDOMNode()).addClass('active');
  },

  render: function() {
    var cssClass = 'folder ';
    if (this.props.options) {
      cssClass = cssClass + this.props.options.cssClass;
    }
    return (
      <div className={cssClass} onClick={this.handleClick}>
        <p>{this.props.name} ({this.props.count})</p>
      </div>
    );
  }
});

module.exports = Folder;


