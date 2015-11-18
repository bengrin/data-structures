var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    size += 1;
  };

  someInstance.pop = function(){
    size -= 1;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
