var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.lengthCount = 0;
  list.startCount = 0;

  list.addToTail = function(value) {
    if (!list.tail) {
      list.tail = new Node(value);
      list.head = list.tail;
      list.lengthCount++;
    } else {
      list[list.lengthCount] = new Node(value);
      list[list.lengthCount - 1] = list.tail;
      list[list.lengthCount - 1].next = list.lengthCount;
      list.tail = list[list.lengthCount];
      list.lengthCount++;
      console.log(list);
    }
  };

  list.removeHead = function() {
    var dequeueHead = list.head.value;
    var nextHead = list.head.next;
    list.head = list[nextHead];
    list[list.startCount] = undefined;
    list.startCount = nextHead;
    list.lengthCount > 0 ? list.lengthCount-- : list.lengthCount = 0;
    return dequeueHead;
  };

  list.contains = function(target) {
    // should return a boolean
    for (var i = 0; i < list.lengthCount; i++) {
      if (list[i] && list[i].value === target) {
        return true;
      }
    }

    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * removed head: O(1)
 * add to tail: O(1)
 * contains: O(n)
 */
