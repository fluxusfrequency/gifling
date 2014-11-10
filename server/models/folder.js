var mongoose = require('mongoose');

var FolderSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  gifs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gif' }]
});

FolderSchema.methods.toObj = function() {
  return {
    name: this.name,
    gifs: this.gifs
  };
};

var Folder = mongoose.model('Folder', FolderSchema);

module.exports = Folder;
