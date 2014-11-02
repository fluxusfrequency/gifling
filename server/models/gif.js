var mongoose = require('mongoose');

var GifSchema = new mongoose.Schema({
  url: { type: String, required: true }
});

GifSchema.methods.toObj = function() {
  return {
    url: this.url
  };
};

var Gif = mongoose.model('Gif', GifSchema);

module.exports = Gif;

