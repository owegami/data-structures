class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lengthCounter = 0;
  }

  enqueue(value) {
    this.storage[this.lengthCounter] = value;
    this.lengthCounter++;
  }

  dequeue() {
    var dequeuedVal = this.storage[0];
    for (var i = 0; i < this.lengthCounter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.lengthCounter > 0 ? this.lengthCounter-- : this.lengthCounter = 0;
    return dequeuedVal;
  }

  size() {
    return this.lengthCounter;
  }

}
