var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;
  var pos = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[pos] = value;
    size++;
    pos++;
  };

  someInstance.dequeue = function(){
    if (size > 0){
      size--;
      var result = storage[index];
      delete storage[index];
      index++;
      return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
