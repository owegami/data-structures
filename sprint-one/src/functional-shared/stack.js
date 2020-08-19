var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};

  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(obj, objProps) {
  for (var key in objProps) {
    obj[key] = objProps[key];
    console.log('key', key, 'objProps[key]', objProps[key]);
  }
};

var stackMethods = {
  push: function(value) {
    storage[lengthCounter] = value;
    lengthCounter++;
  },

  pop: function() {
    var poppedVal = storage[lengthCounter - 1];
    delete storage[lengthCounter - 1];
    lengthCounter > 0 ? lengthCounter-- : lengthCounter = 0;
    return poppedVal;
  },

  size: function() {
    return lengthCounter;
  },
  lengthCounter: 0
};


