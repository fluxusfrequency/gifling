var parameterize = function(name) {
  var slug = name;
  slug = slug.replace(/[^-\w\s]/g, '');  // remove unneeded chars
  slug = slug.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces
  slug = slug.replace(/[-\s]+/g, '-');   // convert spaces to hyphens
  slug = slug.toLowerCase();
  return slug;
};

module.exports = parameterize;
