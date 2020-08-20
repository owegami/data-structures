var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  var lengthCounter = 0;

  extend(someInstance, queueMethods);

  return someInstance;

};

var extend = function(obj, objProps) {
  for (var key in objProps) {
    obj[key] = objProps[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[lengthCounter] = value;
    lengthCounter++;
  },

  dequeue: function() {
    var dequeuedVal = this.storage[0];
    console.log('dequeuedVal:', dequeuedVal, 'lengthCounter:', lengthCounter, 'this:', this);
    for (var i = 0; i < lengthCounter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    lengthCounter > 0 ? lengthCounter-- : lengthCounter = 0;
    console.log('dequeuedVal:', dequeuedVal, 'lengthCounter:', lengthCounter);
    return dequeuedVal;
  },
  size: function() {
    return lengthCounter;
  }
};


