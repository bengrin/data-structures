var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //check type
  this._storage[JSON.stringify(item)] = JSON.stringify(item);
};

setPrototype.contains = function(item){
  if (this._storage[JSON.stringify(item)] === JSON.stringify(item))  {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  delete this._storage[JSON.stringify(item)];
};


/*
 * Complexity: What is the time complexity of the above functions?
 * Constant
 */
