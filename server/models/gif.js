var mongoose = require('mongoose');

var GifSchema = new mongoose.Schema({
  src: { type: String, required: true },
  folders: { type: Array, default: [] }
});

GifSchema.methods.toObj = function() {
  return {
    src: this.src,
    folders: this.folders
  };
};

var Gif = mongoose.model('Gif', GifSchema);

module.exports = Gif;

