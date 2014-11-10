var mongoose = require('mongoose');

var GifSchema = new mongoose.Schema({
  src: { type: String, required: true }
});

GifSchema.methods.toObj = function() {
  return {
    src: this.src
  };
};

var Gif = mongoose.model('Gif', GifSchema);

module.exports = Gif;

