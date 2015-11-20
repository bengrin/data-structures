var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  item = JSON.stringify(item);
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  item = JSON.stringify(item);
  if (this._storage[item] === item)  {
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
 * Linear
 */
