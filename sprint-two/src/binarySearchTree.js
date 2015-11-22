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
  },

  rebalance : function() {
    var treeValues = [];
    var tree;
    var low;
    var high;
    var split;

    this.depthFirstLog(function(item) {
      treeValues.push(item);
    });
    treeValues.sort(function(a, b) {
      return a - b;
    });
    tree = BinarySearchTree(treeValues[Math.floor((treeValues.length / 2))]);
    treeValues.splice(treeValues.length/2, 1);
    low = treeValues.slice(0, treeValues.length / 2);
    high = treeValues.slice(treeValues.length / 2);

    // Recursively divides an array in half and inserts the middle
    // element
    split = function(array) {
      if (array.length === 0){
        return;
      }
      tree.insert(array[Math.floor(array.length/2)]);
      array.splice(Math.floor(array.length/2), 1);
      split(array);    
    };

    split(low);
    split(high);

    return tree;
  },

  maxDepth : function(node, depth) {
    var rightDepth = depth;
    var leftDepth = depth;

    if (node.left !== undefined) {
      leftDepth = this.maxDepth(node.left, depth + 1);
    }

    if (node.right !== undefined) {
      rightDepth = this.maxDepth(node.right, depth + 1);
    }

    return leftDepth > rightDepth ? leftDepth : rightDepth;
  },

};

leafDepth
  



/*
 * Complexity: What is the time complexity of the above functions?
 * insert - Logarithmic
 * contains - Logarithmic
 * depthFirstLog - Linear
 */
 
