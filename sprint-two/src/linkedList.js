var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      var temp = this.tail;
      this.tail.next = Node(value);
      this.tail = this.tail.next;
      this.tail.prev = temp;
    }
  };

  list.addToHead = function(value){
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      var temp = this.head;
      this.head.prev = Node(value);
      this.head = this.head.prev;
      this.head.next = temp;
    }
  };


  list.removeHead = function(){
    var old = this.head;
    this.head = this.head.next;
    return old.value;
  };

  list.removeTail= function(){
    var old = this.tail;
    this.tail = this.tail.prev;
    return old.value;
  };

  list.contains = function(target){
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      } 
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * LinkedList - Constant
 * addToTail - Constant
 * removeHead - Constant
 * contains - Linear
 * Node - Constant
 */

