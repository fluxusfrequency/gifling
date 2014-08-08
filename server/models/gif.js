var mongoose = require('mongoose');

var GifSchema = new mongoose.Schema({
  _url: { type: String, required: true }
});

GifSchema.methods.toObj = function() {
  return {
    _url: this._url
  };
};

var Gif = mongoose.model('Gif', GifSchema);

module.exports = Gif;

