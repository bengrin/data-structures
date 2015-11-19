var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numStacks = 0;
};

Stack.prototype = {
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
  },
  constructor: Stack
};

