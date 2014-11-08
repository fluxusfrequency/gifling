var mongoose = require('mongoose');

var FolderSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

FolderSchema.methods.toObj = function() {
  return {
    name: this.name
  };
};

var Folder = mongoose.model('Folder', FolderSchema);

module.exports = Folder;
