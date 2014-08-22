/**
 * @jsx React.DOM
 */

var React = require('react');
var $ = require('jquery');
require('../../../vendor/jquery-ui/jquery-ui');

var Gif = React.createClass({
  componentDidMount: function() {
    var $gifNode = $(this.getDOMNode());

    $gifNode.draggable({ revert: true });
  },
  render: function() {
    return (
      <div className="gif pure-u-1-2" id={this.props.id}>
        <img src={this.props.link}/>
      </div>
    );
  }
});

module.exports = Gif;

