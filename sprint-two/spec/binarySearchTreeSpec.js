describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

 it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should rebalance the tree', function() {
    var array = [1, 2, 3, 4, 5, 6, 7];
    _.each(array, function(value) {
      binarySearchTree.insert(value);
    });
    binarySearchTree = binarySearchTree.rebalance();
    expect(binarySearchTree.value).to.equal(4);
    expect(binarySearchTree.left.value).to.equal(2);
    expect(binarySearchTree.right.value).to.equal(6);
    expect(binarySearchTree.left.left.value).to.equal(1);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.right.value).to.equal(7);
    expect(binarySearchTree.right.left.value).to.equal(5);
  });

  it('should keep track of its depth', function() {
    var array = [7, 6, 8, 9, 3, 2, 1];
    _.each(array, function(value) {
      binarySearchTree.insert(value);
    });
    //expect(binarySearchTree.left.value).to.equal(3);
    //expect(binarySearchTree.right.value).to.equal(6);
    //expect(binarySearchTree.right.right.value).to.equal(7);
    //expect(binarySearchTree.right.right.right.value).to.equal(8);
    //console.log(binarySearchTree.maxDepth(binarySearchTree, 0));
  });

});
