var BinarySearchTree = function(value) {
// create an way to initialize.
// is there a 'storage' bit we can steal from tree
// AK imagined structure: {node: {value: value, right: node2, left: node3}} where left is a value lower and right is a value higher
  this.value = value;
  this.left = null;
  this.right = null;


  console.log(this.value);
};

BinarySearchTree.prototype.insert = function(value, node) {
  //it accepts a value (a number)
  //it checks the initial node to see if the value is larger or smaller than the input value

  node === undefined ? node = this : node = node;
  var nodeVal = node.value;

  console.log(this, value < nodeVal, value, node.right, node.left);
  if (value > nodeVal) {
    if (node.right) {
      console.log('hello');
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

  // var parentNode = this.storage
  // var insertRecurse = function(parentNode) {

  //if (value < parentNode.value){
  //if (parentNode.left === null) {
  // parentNode.left = new BinarySearchTree(value)
  // } else {
  // insertRecurse(parentNode.left);
  // } else if (value > parentNode.value) {
  // if (parentNode.right === null) {
  // parentNode.right = new BinarySearchTree(value)
  //} else {
  // insertRecurse(parentNode.value)
  // }
  // }

};

BinarySearchTree.prototype.contains = function(value) {
  // assumes it's not contained unless otherwise noted
  var isContained = false;
  var nodeToCheck = this;

  var containsRecurse = function (nodeToCheck) {
    if (nodeToCheck.value === value) {
      isContained = true;
    } else if (nodeToCheck.value > value) {
      nodeToCheck = nodeToCheck.left; //this isn't exactly right
      containsRecurse(nodeToCheck);
    } else if (nodeToCheck.value < value) {
      nodeToCheck = nodeToCheck.left; //this isn't exactly right
      containsRecurse(nodeToCheck);
    }
  };

  containsRecurse(nodeToCheck);

  return isContained;
};

BinarySearchTree.prototype.depthFirstLog = function() {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

