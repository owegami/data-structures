var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lengthCounter = 0;

};

Stack.prototype.size = function() {
  return this.lengthCounter;

};

Stack.prototype.push = function(value) {
  this.storage[this.lengthCounter] = value;
  this.lengthCounter++;
};

Stack.prototype.pop = function() {
  var poppedVal = this.storage[this.lengthCounter - 1];
  delete this.storage[this.lengthCounter - 1];
  this.lengthCounter > 0 ? this.lengthCounter-- : this.lengthCounter = 0;
  return poppedVal;
};

