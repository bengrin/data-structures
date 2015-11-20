var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.parent = undefined;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);

};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(cb);
    }
  }
} 

/*
 * Complexity: What is the time complexity of the above functions?
 * contains - linear
 * addChild - Constant
 */
