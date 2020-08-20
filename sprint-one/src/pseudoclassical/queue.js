var Queue = function() {

  this.storage = {};
  this.lengthCounter = 0;
};

Queue.prototype.size = function() {
  return this.lengthCounter;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lengthCounter] = value;
  this.lengthCounter++;
};

Queue.prototype.dequeue = function() {
  var dequeuedVal = this.storage[0];
  for (var i = 0; i < this.lengthCounter; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.lengthCounter > 0 ? this.lengthCounter-- : this.lengthCounter = 0;
  return dequeuedVal;
};
