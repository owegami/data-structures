var BinarySearchTree = function(value) {
// create an way to initialize.
// is there a 'storage' bit we can steal from tree
// AK imagined structure: {node: {value: value, right: node2, left: node3}} where left is a value lower and right is a value higher
  this.value = value;
  this.left = null;
  this.right = null;


  // console.log(this.value);
};

BinarySearchTree.prototype.insert = function(value, node) {
  //it accepts a value (a number)
  //it checks the initial node to see if the value is larger or smaller than the input value

  node === undefined ? node = this : node = node;
  var nodeVal = node.value;

  // console.log(this, value < nodeVal, value, node.right, node.left);
  if (value > nodeVal) {
    if (node.right) {
      // console.log('hello');
      this.insert(value, node.right);

    } else {
      node.right = new BinarySearchTree(value);
    }
  } else if (value < nodeVal) {
    if (node.left) {
      this.insert(value, node.left);
    } else {
      node.left = new BinarySearchTree(value);
    }
  }

};

BinarySearchTree.prototype.contains = function(value) {
  // assumes it's not contained unless otherwise noted
  var isContained = false;
  var node = this;
  var nodeToCheck = node.value;

  var containsRecurse = function (nodeToCheck) {
    if (nodeToCheck === value) {
      isContained = true;
    } else if (nodeToCheck > value) {
      node = node.left;
      if (!node) {
        return false;
      }
      nodeToCheck = node.value;
      containsRecurse(nodeToCheck);
    } else if (nodeToCheck < value) {
      node = node.right;
      if (!node) {
        return false;
      }
      nodeToCheck = node.value;
      containsRecurse(nodeToCheck);
    }
  };

  containsRecurse(nodeToCheck);

  return isContained;
};

BinarySearchTree.prototype.depthFirstLog = function(func, node) {

  node === undefined ? node = this : node = node;

  //get func and apply func to the node
  var result = func(node.value);
  // if node.left or node.right has anything in it, we recurse through those branches
  for (var key in node) {
    if (key === 'left' && node.left) {
      this.depthFirstLog(func, node.left);
    }
    if (key === 'right' && node.right) {
      this.depthFirstLog(func, node.right);
    }
  }
  // if (node.left) {
  //   console.log(node.value);
  //   this.depthFirstLog(func, node.left);
  // }
  // if (node.right) {
  //   console.log(node.value);
  //   this.depthFirstLog(func, node.right);
  // }
  return result;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

