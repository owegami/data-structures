var Stack = function() {
  var someInstance = {};
  var lengthCounter = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  // {0: 'a', 1: 'b'}
  // var accumulator = last key
  someInstance.lengthCount = function() {
    return lengthCounter;
  };

  // Implement the methods below
  someInstance.push = function(value) {
    //use the length to add one to the end
    storage[lengthCounter] = value;
    lengthCounter++;
  };

  someInstance.pop = function() {
    var poppedVal = storage[lengthCounter - 1];
    delete storage[lengthCounter - 1];
    lengthCounter > 0 ? lengthCounter-- : lengthCounter = 0;
    // console.log(poppedVal);
    return poppedVal;
  };

  someInstance.size = function() {
    // return Object.keys(storage).length;
    // careful with use of .length
    return lengthCounter;
  };

  return someInstance;
};

var dog = new Stack;
