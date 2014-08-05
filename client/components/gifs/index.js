/**
 * @jsx React.DOM
 */

var React = require('react');
var GifsList = require('./gifs-list');

var Gifs = React.createClass({
  getInitialState: function() {
    return {
      gifs: [
        "http://media.tumblr.com/tumblr_ln0hhauHUj1qzozj1.gif",
        "http://i.imgur.com/cxaLeCe.gif",
        "http://www.clobberblog.com/wp-content/uploads/2013/06/doingitwrong.gif"
      ]
    }
  },

  render: function() {
    var gifs = this.state.gifs;
    return (
      <div className="gifsContainer">
        <h1>All the gifs</h1>
        <GifsList gifs={gifs} />
      </div>
    );
  }
});

module.exports = Gifs;
