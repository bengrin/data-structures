var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numQueues = 0;
  this.place = 0;
  this.lastCalled = 0;
};

Queue.prototype = {
  enqueue : function(value) {
    this.storage[this.place] = value;
    this.place++;
    this.numQueues++;
  },
  dequeue : function() {
    if (this.numQueues > 0) {
      this.numQueues--;
      var result = this.storage[this.lastCalled];
      delete this.storage[this.lastCalled];
      this.lastCalled++;
      return result;
    }
  },
  size : function() {
    return this.numQueues;
  },
  constructor : Queue
};


