var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.lengthCounter = 0;

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.lengthCounter] = value;
    this.lengthCounter++;
  },

  dequeue: function() {
    var dequeuedVal = this.storage[0];
    for (var i = 0; i < this.lengthCounter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.lengthCounter > 0 ? this.lengthCounter-- : this.lengthCounter = 0;
    return dequeuedVal;
  },

  size: function() {
    return this.lengthCounter;
  }
};


