

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // console.log('this._storage:', this._storage);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create our tuple [k, v]
  var tuple = [];
  tuple.push(k, v);
  // console.log('tuple:', tuple, 'index:', index);
  // console.log(this._storage.get(index));
  var indexInsides = this._storage.get(index);
  if (!indexInsides || indexInsides[0] === k) {
    this._storage.set(index, tuple);
  } else {
    var newBucket = [];
    newBucket.push(indexInsides, tuple);
    console.log(indexInsides);
    // var bucket = [];
    // var lengthOfBucket = indexInsides.length + 1;
    // for (var i = 0; i < lengthOfBucket ; i++) {
    //   if (i < lengthOfBucket - 1) {
    //     bucket.push(indexInsides[i]);
    //   } else if (i === lengthOfBucket - 1) {
    //     bucket.push(tuple);
      // }
    // }
    this._storage.set(index, newBucket);
  }

  // console.log('this: ', this, 'index: ', index);
  // is value steven, carell or [steven, carell]
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // they're giving us k, and the output will be v
  // from the [k, v] pair shown above

  //check if it's a nested array
  if (Array.isArray(this._storage.get(index)[0])) {
    //if is nested array, iterate through array and check if array[array[0]] === k
    var bucketLength = this._storage.get(index).length;
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucketLength; i++) {
      //if array[array[0]] === k return array[array[1]]
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  } else {
    //if not, return index[1]

    return this._storage.get(index)[1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexInsides = this._storage.get(index);
  // console.log(indexInsides, k);
  if (indexInsides[0] === k) {
    console.log('here');
    this._storage.set(index, []);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


