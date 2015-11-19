var Queue = function(){
  var queue = {};
  var storage = [];
  
  queue.enqueue = function(val){
    storage.unshift(val);
    return storage.length;
  };

  queue.dequeue = function(){
    return storage.pop();
  };

  queue.size = function(){
    return storage.length;
  };

  return queue;
};
