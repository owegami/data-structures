

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // I believe that we should be able to create a node & have it floating
  // this kinda be in space, no connection needed
  this.storage[node] = {};
  this.storage[node].value = node;
  this.storage[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage[node]) {
    for (var nodes in this.storage) {
      this.removeEdge(node, nodes);
    }
    delete this.storage[node];
  }


  // should it also delete references (ie in edges?)
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isEdge = false;
  var nodeEdges = this.storage[fromNode].edges;
  for (var i = 0; i < nodeEdges.length; i++) {
    if (nodeEdges[i] === toNode) {
      isEdge = true;
    }
  }
  return isEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // go into the 'fromNode' and push the 'toNode' into connects array
  // go into 'toNode' and do the same with 'fromNode'

  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
  console.log('this.storage[fromNode]', this.storage[fromNode]);
  console.log('this.storage[toNode]', this.storage[toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodesEdges = this.storage[fromNode].edges;
  var toNodesEdges = this.storage[toNode].edges;

  for (var i = 0; i < fromNodesEdges.length; i++) {
    if (fromNodesEdges[i] === toNode) {
      fromNodesEdges.splice(i, 1);
    }
  }
  for (var i = 0; i < toNodesEdges.length; i++) {
    if (toNodesEdges[i] === fromNode) {
      toNodesEdges.splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


