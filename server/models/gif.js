var mongoose = require('mongoose');

var GifSchema = new mongoose.Schema({
  src: { type: String, required: true },
  tags: { type: Array, default: [] }
});

GifSchema.methods.toObj = function() {
  return {
    src: this.src,
    tags: this.tags
  };
};

var Gif = mongoose.model('Gif', GifSchema);

module.exports = Gif;

