var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.place = 0;
  obj.lastCalled = 0;
  obj.numQueues = 0;
  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.place] = value;
    this.numQueues++;
    this.place++;
  },
  dequeue: function() {
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
  }
};


