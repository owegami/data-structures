var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  // we can actually entirely remove storage
  someInstance.storage.lengthCounter = 0;

  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(obj, objProps) {
  for (var key in objProps) {
    obj[key] = objProps[key];
    // console.log('key is:', key, 'objProps[key] is:', objProps[key]);
  }
};

var stackMethods = {
  push: function(value) {
    // this.storage = value;
    // lengthCounter++;
    var locale = this.storage.lengthCounter;
    this.storage[locale] = value;
    this.storage.lengthCounter++;

  },

  pop: function() {
    // var poppedVal = storage[lengthCounter - 1];
    // delete storage[lengthCounter - 1];
    // lengthCounter > 0 ? lengthCounter-- : lengthCounter = 0;
    // return poppedVal;
    var index = this.storage.lengthCounter - 1;
    // console.log('index: ', index);
    var poppedVal = this.storage[index];
    // console.log(this.storage);
    // console.log('this storage index: ', this.storage[index]);
    // console.log('poppedValNEW:', poppedVal);
    delete this.storage[index];
    this.storage.lengthCounter > 0 ? this.storage.lengthCounter-- : this.storage.lengthCounter = 0;
    return poppedVal;
  },

  size: function() {
    // return lengthCounter;
    return this.storage.lengthCounter;
  }
};


