var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.numStacks = 0;
  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.numStacks] = value;
    this.numStacks++;
  },
  pop: function() {
    if (this.numStacks > 0) {
      this.numStacks--;
      var result = this.storage[this.numStacks];
      delete this.storage[this.numStacks];
      return result;
    }
  },
  size: function() {
    return this.numStacks;
  }
};


