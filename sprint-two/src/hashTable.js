var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var overwrite = false;
  var val = this._storage.get(i) || [];

  _.each(val, function(tuple) {
    if (tuple[0] === k) { 
      tuple[1] = v;
      overwrite = true;
    }
  });

  if(!overwrite) {
    val.push([k, v]);
  }

  this._storage.set(i, val);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var val = this._storage.get(i);
  for (var i = 0; i < val.length; i++) {
    if (val[i][0] === k) {
      return val[i][1];
    }
  }

  
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var val = this._storage.get(i);
  for (var i = 0; i < val.length; i++) {
    if (val[i][0] === k) {
      val[i].splice(1, 1, null);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 * Linear
 */
