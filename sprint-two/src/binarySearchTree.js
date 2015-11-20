var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTreeMethods);
  tree.value = value;
  tree.left = undefined;
  tree.right = undefined;

  return tree;
};

BinarySearchTreeMethods = {
  insert : function(val){
    if (val < this.value) {
      if (this.left === undefined) {
        this.left = BinarySearchTree(val);
      } else {
        this.left.insert(val);
      } 
    } else if (val > this.value) {
      if (this.right === undefined) {
        this.right = BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }

  },

  contains : function(val){
    if (this.value === val) {
      return true;
    }
    else if (val < this.value) {
      return this.left !== undefined ? this.left.contains(val) : false;  
    }
    else if (val > this.value) {
      return this.right !== undefined ? this.right.contains(val) : false;
    }

  },

  depthFirstLog : function(cb){
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - Logarithmic
 * contains - Logarithmic
 * depthFirstLog - Linear
 */
 
