/**
 * @jsx React.DOM
 */

var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
var parameterize = require('../../utilities/parameterize');

var Folder = React.createClass({
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


