var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.lengthCounter = 0;

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.lengthCounter] = value;
    this.lengthCounter++;
  },

  pop: function () {
    var poppedVal = this.storage[this.lengthCounter - 1];
    delete this.storage[this.lengthCounter - 1];
    this.lengthCounter > 0 ? this.lengthCounter-- : this.lengthCounter = 0;
    return poppedVal;
  },

  size: function() {
    return this.lengthCounter;
  },
};


