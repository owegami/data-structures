var Queue = function() {
  var someInstance = {};
  var lengthCounter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    for ( var i = lengthCounter; i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage[0] = value;
    lengthCounter++;
    // we need to add 1 to all other keys?
  };

  someInstance.dequeue = function() {
    var dequeuedVal = storage[lengthCounter - 1];
    delete storage[lengthCounter - 1];
    lengthCounter > 0 ? lengthCounter-- : lengthCounter = 0;
    return dequeuedVal;
  };

  someInstance.size = function() {
    return lengthCounter;
  };

  return someInstance;
};
