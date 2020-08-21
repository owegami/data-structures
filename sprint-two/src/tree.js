var Tree = function(value) {

  this.value = value;
  this.children = [];
  // just confirming what the opening Tree was
  // it instantiated a Tree with a value, right?

};

Tree.prototype.addChild = function(value) {
  var node = new Tree(value);
  // should it be:
  // var node = {value: value, children: []};
  // we don't want to add a new Tree, only add a child
  this.children.push(node);
  console.log('Tree with: ', value, this);
};

Tree.prototype.contains = function(target) {
//he are looking for a value so we will check against .value
  // this = the whole Tree

  let isFound = false;

  var checker = function(node) {

    if (node.value === target) {
      isFound = true;
    } else if (node.children.length > 0 && !isFound) {
      for (var i = 0; i < node.children.length; i++) {
        checker(node.children[i]);
      }
    }
    return isFound;
  };

  var firstNode = this;
  return checker(firstNode);

};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild O(1)
 * contains O(N), worst case its not there, it checks ALL the nodes
 *
 */


//  cardboard = {
//    value: 2,
//   children: [
//       {
//         value: 1,
//         children: [
//           {newchildren nodes}
//         ]
//       },
//       {
//         value: 3,
//         children: []
//       }
//   }]
// }

// cardboard.children[1].addChild('hi');

// cardboard.contains(5);