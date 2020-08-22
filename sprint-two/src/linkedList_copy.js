var LinkedListCopy = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    // if it's an empty list
    if (list.head === null) {
      // then it is an empty list
      // create a new head node
      list.head = new Node(value);
      // set head and tail nodes equal
      list.tail = list.head;
    } else {
      // then we have a LinkedList
      newNode = new Node(value);
      // then make the one after the tail the new node
      list.tail.next = newNode;
      // then make the tail the one beyond the tail
      list.tail = list.tail.next;
      console.log('list: ', list);
      console.log('list.head: ', list.head);
    }
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var oldHead = list.head;
    delete list.head;
    list.head = newHead;
    return oldHead.value;
  };

  list.contains = function(target) {

    var containTest = false;
    var node = list.head;
    console.log('list: ', list);
    console.log('next.node: ', node.next);
    while (node) {
      if (node.value === target) {
        containTest = true;
      }
      node = node.next;
    }
    return containTest;
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
 */

// Do we need a test for the ability to add an item to the list
// if we know where it's supposed to go?
// That should be added to the specs