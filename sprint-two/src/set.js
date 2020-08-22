var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.storage[item]) {
    this.storage[item] = true;
  }
};

setPrototype.contains = function(item) {
  var isFound = false;
  if (this.storage[item]) {
    isFound = true;
  }
  return isFound;
};

setPrototype.remove = function(item) {
  if (this.storage[item]) {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
